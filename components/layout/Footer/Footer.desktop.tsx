'use client';
import Link from 'next/link';

export default function FooterDesktop() {
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

  const socialLinks = [
    { icon: "📘", href: "https://www.facebook.com/shiaquranteachers", label: "Facebook" },
    { icon: "📷", href: "https://www.instagram.com/shiaquranteachers/", label: "Instagram" },
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "📺", href: "#", label: "YouTube" },
    { icon: "📧", href: "mailto:info@al-asr.centers.pk", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-2xl">🕌</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Al-Asr Centers</h3>
                <p className="text-red-300 text-sm">Islamic Knowledge Portal</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Your trusted platform for comprehensive Islamic knowledge, community programs, 
              and spiritual guidance. Serving the Muslim community with faith and dedication.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span>📱</span>
                <div>
                  <div className="text-sm">0300-8055414</div>
                  <div className="text-sm">0313-8055414</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>📧</span>
                <span className="text-sm">info@al-asr.centers.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span>📋</span>
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-2 text-gray-300 hover:text-red-400 transition-colors rounded-lg hover:bg-gray-800 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span>🛠️</span>
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 p-2 text-gray-300 hover:text-red-400 transition-colors rounded-lg hover:bg-gray-800 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{service.icon}</span>
                  <span className="text-sm">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span>📡</span>
              Stay Connected
            </h4>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to our newsletter for Islamic insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div>© {currentYear} Al-Asr Islamic Centers. All rights reserved.</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with ❤️ by 
                <a 
                  href="https://programming.communities.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline font-medium"
                >
                  Programming Communities
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-red-400 transition-colors">
                Cookies Policy
              </Link>
              <Link href="/sitemap-page" className="text-gray-400 hover:text-red-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-1 bg-linear-to-r from-red-600 via-red-500 to-red-600" />
    </footer>
  );
}   