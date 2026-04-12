import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const MotionDiv = motion.div;

const defaultTestimonials = [
  {
    id: 1,
    name: 'Agnes Kyei Aidoo',
    role: 'HR Director',
    company: 'Tech Solutions Ghana',
    content: 'Working with Amplify has been a game-changer for our company. Their expertise in HR has led to noticeable improvements in our workplace culture and employee engagement.',
    image_url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80',
  },
  {
    id: 2,
    name: 'Kwaku Abeiku',
    role: 'CEO',
    company: 'Innovate Partners',
    content: 'Amplify Resourcing Limited has truly transformed our HR processes. Their knowledgeable team provided tailored solutions that significantly improved our employee engagement metrics. Highly recommended!',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    id: 3,
    name: 'Kwabena Darko',
    role: 'Operations Manager',
    company: 'Growth Ventures',
    content: 'I was impressed with how quickly Amplify understood our unique challenges and provided actionable insights. Their support has been invaluable in reshaping our HR approach.',
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
  },
];

export default function TestimonialsSection() {
  const displayTestimonials = defaultTestimonials;


  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

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
              <Star size={16} className="text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800"> Clients Say</span>
            </h2>
            <p className=" text-gray-600 leading-relaxed">
              Hear from the businesses we've helped transform and grow.
            </p>
          </MotionDiv>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 pr-4 scrollbar-hide">
              {displayTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full snap-center">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, idx) => (
              <MotionDiv
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}