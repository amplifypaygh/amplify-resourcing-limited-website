import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newServiceContent as services } from '@/lib/content';

const MotionDiv = motion.div;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}  
          <Link to="/" className="flex items-center gap-3">
            {isScrolled ? (
              <img src="/amplify-transparent.png" alt="Amplify Resourcing Limited" className="h-14" />
            ) : (
              <img src="/amplify-light.png" alt="Amplify Resourcing Limited" className="h-14" />
            )}
  
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.name === 'Services' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-500/10'
                        : 'text-white/90 hover:text-white hover:bg-purple-500'
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-black/10"
                      >
                        <Link
                          to="/services"
                          onClick={() => setIsServicesOpen(false)}
                          className="mb-2 block rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-purple-50 hover:text-purple-700"
                        >
                          View all services
                        </Link>
                        <div className="space-y-1">
                          {services.map((service, index) => (
                            <MotionDiv
                              key={service.slug}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.04 }}
                            >
                              <Link
                                to={`/services/${service.slug}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="block rounded-xl px-4 py-3 transition hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${service.color} text-white shadow-lg`}>
                                    <service.icon className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900">{service.navLabel}</div>
                                    {/* <p className="mt-1 text-xs leading-relaxed text-gray-500">{service.description}</p> */}
                                  </div>
                                </div>
                              </Link>
                            </MotionDiv>
                          ))}
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsServicesOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-500/10'
                      : 'text-white/90 hover:text-white hover:bg-purple-500'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="p-4 space-y-1">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-2">
            <Link
              to="/services"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsServicesOpen(false);
              }}
              className="block rounded-xl px-4 py-3 text-gray-900 font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Services
            </Link>
            <div className="space-y-1 pt-1">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-white hover:text-purple-700 transition-colors"
                >
                  {service.navLabel}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsServicesOpen(false);
              }}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4"
          >
            <Button asChild className="w-full bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full py-3">
              <span>Get in Touch</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}