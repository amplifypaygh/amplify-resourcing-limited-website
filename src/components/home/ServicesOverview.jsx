import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Lightbulb,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import thoughtLeadershipImage from '@/assets/thought-leadership.jpg';
import hrAdvisoryImage from '@/assets/people-at-meeting.jpg';
import managementConsultingImage from '@/assets/streategy-meeting-with-people.jpg';
import technologySolutionsImage from '@/assets/tech-solutions.jpg';

const MotionDiv = motion.div;

const services = [
  {
    icon: Lightbulb,
    title: 'Thought Leadership Execution',
    description: 'We help leaders shape influence, visibility, and market positioning through focused thought leadership support.',
    image: thoughtLeadershipImage,
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-700',
  },
  {
    icon: Users,
    title: 'HR Advisory',
    description: 'We provide practical HR guidance that helps organizations build stronger people systems and workplace outcomes.',
    image: hrAdvisoryImage,
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-700',
  },
  {
    icon: Award,
    title: 'Management Consulting',
    description: 'We support organizations with strategic advice that improves structure, execution, and long-term performance.',
    image: managementConsultingImage,
    color: 'from-emerald-500 to-emerald-600',
    textColor: 'text-emerald-700',
  },
  {
    icon: Sparkles,
    title: 'Technology Solutions',
    description: 'We harness practical technology to streamline operations, improve visibility, and enable smarter decisions.',
    image: technologySolutionsImage,
    color: 'from-cyan-500 to-cyan-600',
    textColor: 'text-cyan-700',
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
              <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Four Core Services</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              Focused support across
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800"> the areas that matter most</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore the four main service areas Amplify uses to help organizations grow, communicate, and perform better.
            </p>
          </MotionDiv>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {services.map((service, idx) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="relative h-120 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  <div className={`absolute top-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color} shadow-xl`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 rounded-t-xl">
                    <h3 className={`text-2xl font-bold leading-tight text-white mb-2`}>
                      {service.title}
                    </h3>
                    <p className="mb-0 text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
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
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}