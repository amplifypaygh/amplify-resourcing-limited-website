import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserSearch, 
  Shield, 
  GraduationCap, 
  Heart, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const services = [
  {
    icon: Users,
    title: 'HR Advisory',
    description: 'Strategic HR guidance to build strong organizational foundations and optimize your people processes.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: UserSearch,
    title: 'Talent Acquisition',
    description: 'Find and attract the right talent with our comprehensive recruitment and selection strategies.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Compliance & Policy',
    description: 'Ensure your organization meets all regulatory requirements with robust policies and procedures.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Upskill your workforce with tailored training programs that drive performance and growth.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Culture & Retention',
    description: 'Build a thriving workplace culture that attracts, engages, and retains top talent.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Sparkles,
    title: 'Technology Solutions',
    description: 'Harness the power of technology to optimize your HR processes and drive innovation.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">What We Offer</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              Empowering Businesses with
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800"> Smart Solutions</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Discover our integrated services designed to support and scale your business efficiently.
            </p>
          </MotionDiv>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                {/* Hover Background */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={"/services"}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to={"/services"}>
            <Button
              size="lg"
              className="bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-10 py-6 font-semibold shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}