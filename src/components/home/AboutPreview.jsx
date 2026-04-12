import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const highlights = [
  'Tailored HR strategies for your unique needs',
  'Technology-driven solutions for efficiency',
  'Experienced team across diverse industries',
  'End-to-end support from planning to execution',
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team discussion"
                  className="w-full h-125 object-cover"
                />
              </div>
              
              {/* Decorative Background */}
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-linear-to-br from-primary/10 to-secondary/20 rounded-3xl -z-10"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">10+</div>
                    <div className="text-gray-500">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Second floating card */}
              <div className="absolute top-8 -right-4 bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-4 shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Mission Driven</div>
                    <div className="text-secondary/90 text-sm">People First</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Content Side */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Lightbulb size={16} className="text-primary" />
              <span className="text-primary-dark text-sm font-semibold uppercase tracking-wide">Who We Are</span>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Discover the Mission Behind
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark"> Amplify Resourcing</span>
            </h2>

            <p className=" text-gray-600 leading-relaxed mb-4">
              At Amplify Resourcing Limited, we provide expert advice and comprehensive business support services, integrating both human resource solutions and technology-driven innovations to help organizations thrive.
            </p>

            <p className=" text-gray-500 leading-relaxed mb-6">
              We specialize in HR consulting, business optimization, technology solutions, and automation, ensuring that businesses have the right tools and workforce to achieve sustainable growth.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </MotionDiv>
              ))}
            </div>

            <Link to="/about">
              <Button
                size="lg"
                className="bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-full px-8 py-6 font-semibold shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                Read More About Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}