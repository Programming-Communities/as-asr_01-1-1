'use client';
import Link from 'next/link';

export default function Footer4k() {
  const quickLinks = [
    { name: "Home Portal", href: "/", icon: "🏠" },
    { name: "About Center", href: "/about", icon: "ℹ️" },
    { name: "Islamic Library", href: "/posts", icon: "📚" },
    { name: "Knowledge Categories", href: "/categories", icon: "📂" },
    { name: "Contact Support", href: "/contact", icon: "📞" },
    { name: "Support Our Mission", href: "/donate", icon: "💝" },
  ];

  const services = [
    { name: "Islamic Calendar System", href: "/islamic-calendar", icon: "📅" },
    { name: "Quran Learning Program", href: "/quran-classes", icon: "📖" },
    { name: "Community Development", href: "/community-programs", icon: "👨‍👩‍👧‍👦" },
    { name: "Spiritual Guidance", href: "/religious-guidance", icon: "🕌" },
    { name: "Islamic Education", href: "/education-services", icon: "🎓" },
    { name: "Funeral Services", href: "/funeral-services", icon: "⚰️" },
  ];

  const resources = [
    { name: "Daily Prayer Times", href: "/prayer-times", icon: "🕋" },
    { name: "Quranic Studies", href: "/quran", icon: "📖" },
    { name: "Hadith Database", href: "/hadith", icon: "📜" },
    { name: "Islamic Events Calendar", href: "/events", icon: "📅" },
    { name: "Educational Resources", href: "/education", icon: "📚" },
    { name: "Community Forum", href: "/community", icon: "💬" },
  ];

  const socialLinks = [
    { icon: "📘", href: "https://www.facebook.com/shiaquranteachers", label: "Facebook Community" },
    { icon: "📷", href: "https://www.instagram.com/shiaquranteachers/", label: "Instagram Updates" },
    { icon: "🐦", href: "#", label: "Twitter Feed" },
    { icon: "📺", href: "#", label: "YouTube Channel" },
    { icon: "💬", href: "#", label: "WhatsApp Group" },
    { icon: "📱", href: "#", label: "Telegram Channel" },
    { icon: "👨‍💻", href: "#", label: "LinkedIn" },
    { icon: "📧", href: "mailto:info@al-asr.centers.pk", label: "Email Support" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-12 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-16">
          
          {/* Premium Brand Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-linear-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-3xl">
                <span className="text-white text-4xl">🕌</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">Al-Asr Islamic Centers</h3>
                <p className="text-red-300 text-xl mt-2">Global Islamic Knowledge & Community Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-10 leading-relaxed text-xl">
              A comprehensive Islamic platform dedicated to providing authentic knowledge, 
              spiritual guidance, and community services. Empowering Muslims worldwide with 
              faith-based education, resources, and support for holistic development.
            </p>

            {/* Premium Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 text-gray-300">
                <span className="text-3xl">📱</span>
                <div>
                  <div className="text-2xl font-bold">0300-8055414</div>
                  <div className="text-2xl font-bold">0313-8055414</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="text-3xl">📧</span>
                <span className="text-2xl">info@al-asr.centers.pk</span>
              </div>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="text-3xl">📍</span>
                <span className="text-2xl">Islamic Knowledge Center, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-3xl">🚀</span>
              Quick Navigation
            </h4>
            <div className="space-y-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-5 p-4 text-gray-300 hover:text-red-400 transition-all duration-300 rounded-2xl hover:bg-gray-800 group border border-gray-700 hover:border-red-500/50"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-xl font-semibold">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-3xl">🛠️</span>
              Our Services
            </h4>
            <div className="space-y-5">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-5 p-4 text-gray-300 hover:text-red-400 transition-all duration-300 rounded-2xl hover:bg-gray-800 group border border-gray-700 hover:border-red-500/50"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  <span className="text-xl font-semibold">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-3xl">📚</span>
              Resources
            </h4>
            <div className="space-y-5">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  href={resource.href}
                  className="flex items-center gap-5 p-4 text-gray-300 hover:text-red-400 transition-all duration-300 rounded-2xl hover:bg-gray-800 group border border-gray-700 hover:border-red-500/50"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{resource.icon}</span>
                  <span className="text-xl font-semibold">{resource.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Premium Newsletter & Social */}
          <div className="xl:col-span-1">
            <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="text-3xl">📡</span>
              Stay Connected
            </h4>

            {/* Premium Newsletter */}
            <div className="mb-10">
              <p className="text-gray-300 text-xl mb-6">
                Get Islamic insights & community updates
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-5 bg-gray-800 border-2 border-gray-700 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500 focus:border-transparent text-xl"
                />
                <button className="w-full bg-linear-to-r from-red-500 to-pink-500 text-white px-6 py-5 rounded-3xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-3xl font-bold text-xl">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Premium Social Media */}
            <div>
              <p className="text-gray-300 text-xl mb-6">Connect with our community</p>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-2xl border border-gray-700 hover:border-red-500"
                    aria-label={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Bar */}
      <div className="border-t-2 border-gray-800">
        <div className="container mx-auto px-12 py-10">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
            {/* Premium Copyright */}
            <div className="text-gray-400 text-xl text-center xl:text-left">
              <div className="font-bold text-2xl">© {currentYear} Al-Asr Islamic Centers Worldwide</div>
              <div className="flex items-center justify-center xl:justify-start gap-3 mt-3">
                <span className="text-lg">Crafted with ❤️ by</span>
                <a 
                  href="https://programming.communities.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline font-bold text-xl"
                >
                  Programming Communities
                </a>
              </div>
            </div>

            {/* Premium Legal Links */}
            <div className="flex flex-wrap justify-center gap-10 text-xl">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors font-semibold">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-red-400 transition-colors font-semibold">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-red-400 transition-colors font-semibold">
                Cookies Policy
              </Link>
              <Link href="/sitemap-page" className="text-gray-400 hover:text-red-400 transition-colors font-semibold">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Decorative Line */}
      <div className="h-3 bg-linear-to-r from-red-600 via-red-500 to-red-600 shadow-3xl" />
    </footer>
  );
}