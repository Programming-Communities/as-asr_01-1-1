// lib/redis.ts
let redis: any = null;

// Only initialize Redis in production or if REDIS_URL is available
if (process.env.NODE_ENV === 'production' && process.env.REDIS_URL) {
  const { Redis } = require('ioredis');
  redis = new Redis(process.env.REDIS_URL);
} else {
  // Fallback to in-memory cache for development
  console.log('⚠️ Redis not configured, using in-memory cache');
  const cache = new Map();
  
  redis = {
    get: async (key: string) => cache.get(key),
    setex: async (key: string, expiration: number, value: string) => {
      cache.set(key, value);
      setTimeout(() => cache.delete(key), expiration * 1000);
    },
    del: async (...keys: string[]) => {
      keys.forEach(key => cache.delete(key));
      return keys.length;
    },
    keys: async (pattern: string) => {
      const regex = new RegExp(pattern.replace('*', '.*'));
      return Array.from(cache.keys()).filter(key => regex.test(key));
    }
  };
}

export async function getCachedData<T>(key: string): Promise<T | null> {
  try {
    const cached = await redis.get(key);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Redis get error:', error);
    return null;
  }
}

export async function setCachedData<T>(
  key: string, 
  data: T, 
  expiration: number = 3600 // 1 hour default
): Promise<void> {
  try {
    await redis.setex(key, expiration, JSON.stringify(data));
  } catch (error) {
    console.error('Redis set error:', error);
  }
}

export async function invalidateCache(pattern: string): Promise<void> {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (error) {
    console.error('Redis invalidate error:', error);
  }
}

export default redis;