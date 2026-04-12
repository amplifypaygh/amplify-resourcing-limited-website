import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MotionDiv = motion.div;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-purple-950/95 via-purple-900/90 to-purple-800/80"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-purple-200 text-sm font-medium">Your Growth Partner</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Human-Centric
              <span className=" p-2 text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">
                 HR Solutions
              </span>
              <br />
              for Growth-Focused Businesses
            </h1>

            <p className="text-lg text-purple-100/80 leading-relaxed mb-10 max-w-xl">
              We empower organizations with tailored HR strategies and technology-driven solutions that drive efficiency, enhance performance, and fuel sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 font-semibold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:scale-105"
                >
                  Talk to Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              {[
                { number: '200+', label: 'Solutions Delivered' },
                { number: '50+', label: 'Partnerships Built' },
                { number: '15+', label: 'Industry Experts' },
              ].map((stat, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-purple-200/70 text-sm mt-1">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Decorative Element */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80"
                alt="HR Professional"
                className="relative rounded-3xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-gray-500 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <MotionDiv
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
          ></MotionDiv>
        </div>
      </div>
    </section>
  );
}