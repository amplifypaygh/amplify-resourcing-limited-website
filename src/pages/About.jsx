import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Target,
  Eye,
  Heart,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '@/components/others/CTASection';
import HeroSection from '@/components/others/HeroSection';
import { AboutCTA, AboutHero, values, approach } from '@/lib/content';

const MotionDiv = motion.div;

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection heroContent={AboutHero} />

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-linear-to-br from-purple-100 to-purple-200 rounded-3xl -z-10"></div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className=" text-gray-600 leading-relaxed mb-6">
                At Amplify Resourcing Limited, we provide expert advice and comprehensive business support services, integrating both human resource solutions and technology-driven innovations to help organizations thrive.
              </p>
              <p className=" text-gray-600 leading-relaxed mb-8">
                We specialize in HR consulting, business optimization, technology solutions, marketing, and automation, ensuring that businesses have the right tools and workforce to achieve sustainable growth.
              </p>

            </MotionDiv>
          </div>

          {/* Mission & Vision */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower organizations with tailored HR strategies and technology-driven solutions that drive efficiency, enhance performance, and fuel sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading partner for businesses seeking to transform their HR operations and achieve exceptional growth through people-centric solutions.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Heart size={16} className="text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Our Core Values</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
                Guiding Principles for
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800"> Business Success</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Rocket size={16} className="text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Our Approach</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
                Strategic, People-Driven &
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800"> Tech-Enabled</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="text-8xl font-bold text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {idx < approach.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                    <ArrowRight size={32} className="text-purple-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection cta={AboutCTA} />
    </div>
  );
}
