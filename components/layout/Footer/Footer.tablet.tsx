'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FooterTablet() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🕌</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Al-Asr Centers</h3>
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

          {/* Accordion Sections */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Quick Links Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('quickLinks')}
                  className="w-full flex items-center justify-between text-left mb-4"
                >
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span>📋</span>
                    Quick Links
                  </h4>
                  <span className="text-gray-400">
                    {expandedSection === 'quickLinks' ? '▲' : '▼'}
                  </span>
                </button>
                
                <div className={`space-y-2 transition-all duration-300 ${
                  expandedSection === 'quickLinks' ? 'block' : 'hidden'
                }`}>
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

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('services')}
                  className="w-full flex items-center justify-between text-left mb-4"
                >
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span>🛠️</span>
                    Our Services
                  </h4>
                  <span className="text-gray-400">
                    {expandedSection === 'services' ? '▲' : '▼'}
                  </span>
                </button>
                
                <div className={`space-y-2 transition-all duration-300 ${
                  expandedSection === 'services' ? 'block' : 'hidden'
                }`}>
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
            </div>

            {/* Newsletter & Social */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span>📡</span>
                Stay Connected
              </h4>
              
              {/* Newsletter */}
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-2">Get Islamic insights in your inbox</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-gray-300 text-sm mb-2">Follow us for updates</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div>© {currentYear} Al-Asr Islamic Centers</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with ❤️ by 
                <a 
                  href="https://programming.communities.pk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  Programming Communities
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms
              </Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-red-400 transition-colors">
                Cookies
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