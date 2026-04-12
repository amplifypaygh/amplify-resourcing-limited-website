import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, Send, Share2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'HR Advisory',
    'Talent Acquisition',
    'Compliance & Policy',
    'Training & Development',
    'Culture & Retention',
  ];

  const quickLinks = [
    { name: 'About Us', path: 'About' },
    { name: 'Our Services', path: 'Services' },
    { name: 'Insights', path: 'Insights' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="amplify-logo-bg.jpg" alt="Amplify Resourcing Limited" className="h-full w-full object-cover rounded-md" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering organizations through people, process & innovation. Your trusted HR and business growth partner.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={`/${link.path.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@amplifyresourcing.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail size={18} className="mt-0.5 shrink-0" />
                  <span>info@amplifyresourcing.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233000000000"
                  className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Phone size={18} className="mt-0.5 shrink-0" />
                  <span>+233 00 000 0000</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>Accra, Ghana</span>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  {[
                    { icon: Globe, href: '#', label: 'Website' },
                    { icon: MessageCircle, href: '#', label: 'Messages' },
                    { icon: Send, href: '#', label: 'Send' },
                    { icon: Share2, href: '#', label: 'Share' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Amplify Resourcing Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}