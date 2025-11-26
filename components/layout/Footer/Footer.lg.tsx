'use client';
import Link from 'next/link';

export default function FooterLg() {
  const quickLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About Us", href: "/about", icon: "ℹ️" },
    { name: "Islamic Blog", href: "/posts", icon: "📚" },
    { name: "Categories", href: "/categories", icon: "📂" },
    { name: "Contact", href: "/contact", icon: "📞" },
    { name: "Donate", href: "/donate", icon: "💝" },
  ];

  const services = [
    { name: "Islamic Calendar", href: "/islamic-calendar", icon: "📅" },
    { name: "Quran Classes", href: "/quran-classes", icon: "📖" },
    { name: "Community Programs", href: "/community-programs", icon: "👨‍👩‍👧‍👦" },
    { name: "Religious Guidance", href: "/religious-guidance", icon: "🕌" },
    { name: "Education Services", href: "/education-services", icon: "🎓" },
    { name: "Funeral Services", href: "/funeral-services", icon: "⚰️" },
  ];

  const resources = [
    { name: "Prayer Times", href: "/prayer-times", icon: "🕋" },
    { name: "Quran Reading", href: "/quran", icon: "📖" },
    { name: "Hadith Collection", href: "/hadith", icon: "📜" },
    { name: "Islamic Events", href: "/events", icon: "📅" },
  ];

  const socialLinks = [
    { icon: "📘", href: "https://www.facebook.com/shiaquranteachers", label: "Facebook" },
    { icon: "📷", href: "https://www.instagram.com/shiaquranteachers/", label: "Instagram" },
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "📺", href: "#", label: "YouTube" },
    { icon: "💬", href: "#", label: "WhatsApp" },
    { icon: "📧", href: "mailto:info@al-asr.centers.pk", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-2xl">🕌</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Al-Asr Islamic Centers</h3>
                <p className="text-red-300 text-lg">Comprehensive Islamic Knowledge Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              Your premier destination for authentic Islamic knowledge, comprehensive community services, 
              and spiritual guidance. Empowering Muslims worldwide with faith-based education and support.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-xl">📱</span>
                <div>
                  <div className="text-lg font-medium">0300-8055414</div>
                  <div className="text-lg font-medium">0313-8055414</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-xl">📧</span>
                <span className="text-lg">info@al-asr.centers.pk</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-xl">📍</span>
                <span className="text-lg">Islamic Center, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Quick Navigation
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-3 text-gray-300 hover:text-red-400 transition-all duration-300 rounded-xl hover:bg-gray-800 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-lg font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Our Services
            </h4>
            <div className="space-y-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-4 p-3 text-gray-300 hover:text-red-400 transition-all duration-300 rounded-xl hover:bg-gray-800 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  <span className="text-lg font-medium">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">📡</span>
              Stay Connected
            </h4>

            {/* Enhanced Newsletter */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg mb-4">
                Subscribe for Islamic insights & updates
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500 focus:border-transparent text-lg"
                />
                <button className="w-full bg-linear-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-2xl font-bold text-lg">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div>
              <p className="text-gray-300 text-lg mb-4">Follow our journey</p>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
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

      {/* Enhanced Bottom Bar */}
      <div className="border-t-2 border-gray-800">
        <div className="container mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Enhanced Copyright */}
            <div className="text-gray-400 text-lg text-center lg:text-left">
              <div className="font-semibold">© {currentYear} Al-Asr Islamic Centers. All rights reserved.</div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <span>Made with ❤️ by</span>
                <a 
                  href="https://programming.communities.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline font-bold"
                >
                  Programming Communities
                </a>
              </div>
            </div>

            {/* Enhanced Legal Links */}
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-red-400 transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-red-400 transition-colors font-medium">
                Cookies Policy
              </Link>
              <Link href="/sitemap-page" className="text-gray-400 hover:text-red-400 transition-colors font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Line */}
      <div className="h-2 bg-linear-to-r from-red-600 via-red-500 to-red-600 shadow-2xl" />
    </footer>
  );
}