import React from 'react';
import { Award, Users2, Wrench, Target, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const features = [
  {
    icon: Award,
    title: 'Proven Experience',
    description: 'Over a decade of success helping businesses transform their HR operations and achieve growth.',
  },
  {
    icon: Users2,
    title: 'Expert Team',
    description: 'Our team consists of seasoned HR professionals with deep knowledge across various industries.',
  },
  {
    icon: Wrench,
    title: 'Tailored Approach',
    description: 'We understand every business is unique. Our solutions are customized to fit your specific needs.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that directly impact your business performance and growth.',
  },
  {
    icon: Clock,
    title: 'Agile & Responsive',
    description: 'Quick turnaround times and flexible engagement models to match your business pace.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Compliance',
    description: 'Stay compliant with all regulations through our comprehensive policy and compliance services.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award size={16} className="text-purple-300" />
              <span className="text-purple-200 text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              Our Guiding Principles for
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300"> Business Success</span>
            </h2>
            <p className="text-purple-100/80 leading-relaxed">
              We bring together expertise, innovation, and a people-first approach to deliver exceptional results.
            </p>
          </MotionDiv>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-purple-100/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}