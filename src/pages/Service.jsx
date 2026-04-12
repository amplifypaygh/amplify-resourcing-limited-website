import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserSearch, 
  Shield, 
  GraduationCap, 
  Heart, 
  ArrowRight,
  Check,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/others/HeroSection';
import CTASection from '@/components/others/CTASection';
import { services, serviceCTA, serviceHero } from '@/lib/content';

const MotionDiv = motion.div;

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection heroContent={serviceHero} />

      {/* Services Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className=" text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex text-sm items-center gap-2">
                        <div className={`w-5 h-5 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`bg-linear-to-r ${service.color} hover:opacity-90 text-white rounded-full px-8 py-6 font-semibold shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>

                {/* Image Card */}
                <div className={`${service.bgColor} rounded-3xl p-8 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-white rounded-2xl p-8 shadow-xl border ${service.borderColor}`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className={`inline-flex items-center gap-2 bg-linear-to-r ${service.color} text-white rounded-full px-6 py-3 font-semibold`}>
                        <Sparkles size={18} />
                        Tailored Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection cta={serviceCTA} />
    </div>
  );
}