import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import interviewedByHrVideo from '@/assets/being-interviewed-by-hr.mp4';
import fibaSeminarVideo from '@/assets/fido-seminar-video.mp4';

const MotionDiv = motion.div;

function AnimatedCount({ value, suffix = '', isActive }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const duration = 3000;
    const startTime = performance.now();
    let frameId;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [isActive, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

const heroVideos = [
  {
    src: interviewedByHrVideo,
    label: 'Interview highlights',
  },
  {
    src: fibaSeminarVideo,
    label: 'Seminar moments',
  },
];

export default function HeroSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.65 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideoIndex((currentIndex) => (currentIndex + 1) % heroVideos.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video Carousel */}
      <div className="absolute inset-0">
        {heroVideos.map((video, index) => (
          <video
            key={video.src}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload={index === activeVideoIndex ? 'metadata' : 'none'}
            aria-hidden={index !== activeVideoIndex}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/80 to-black/75"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto lg:mx-24  px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl text-left">
          {/* Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-slate-200 text-sm font-medium">Thought Leadership & HR Advisory</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Empowering Organizations Through
              <br />
              <span className=" text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">
                Strategic Thought Leadership
              </span>
              <br />
              and People Transformation
            </h1>

            <p className="text-lg text-purple-100/80 leading-relaxed mb-10 max-w-2xl">
              We help organizations unlock growth through strategic thought leadership execution and human capital solutions that create sustainable business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
            <div ref={statsRef} className="grid grid-cols-3 gap-6 sm:gap-8 mt-16 pt-8 border-t border-white/10 text-left">
              {[
                { value: 99, label: 'Solutions Delivered' },
                { value: 25, label: 'Partnerships Built' },
                { value: 15, label: 'Industry Experts' },
              ].map((stat, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <div className="text-2xl sm:text-4xl font-bold text-white">
                    <AnimatedCount value={stat.value} suffix="+" isActive={isStatsInView} />
                  </div>
                  <div className="text-purple-200/70 text-xs sm:text-sm mt-1">{stat.label}</div>
                </MotionDiv>
              ))}
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