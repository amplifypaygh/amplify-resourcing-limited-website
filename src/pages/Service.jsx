import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/others/HeroSection';
import CTASection from '@/components/others/CTASection';
import { serviceCTA, serviceHero, newServiceContent } from '@/lib/content';

const MotionDiv = motion.div;

function resolveServiceContent(serviceSlug) {
  if (!serviceSlug) {
    return null;
  }

  return newServiceContent.find((service) => service.slug === serviceSlug) || null;
}

export default function Services() {
  const { serviceSlug } = useParams();
  const selectedService = resolveServiceContent(serviceSlug);

  if (serviceSlug && !selectedService) {
    return <Navigate to="/services" replace />;
  }

  const heroContent = selectedService?.heroContent ?? serviceHero;
  const detailItems = selectedService?.subservices
    ?.map((subservice) => {
      if (!subservice || !subservice.title || !subservice.description || !Array.isArray(subservice.features) || subservice.features.length === 0) {
        return null;
      }

      return {
        ...subservice,
        icon: subservice.icon || selectedService.icon || Sparkles,
        color: subservice.color || selectedService.color || 'from-purple-500 to-purple-600',
        bgColor: subservice.bgColor || selectedService.bgColor || 'bg-purple-50',
        borderColor: subservice.borderColor || selectedService.borderColor || 'border-purple-200',
      };
    })
    .filter(Boolean) || [];
  const isDetailView = detailItems.length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection heroContent={heroContent} />

      {isDetailView ? (
        <section className="py-24 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {detailItems.map((item, idx) => {
                const subservice = item;

                return (
                <MotionDiv
                  key={subservice.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${subservice.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <subservice.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {subservice.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {subservice.description}
                    </p>
                    <ul className="space-y-4 mb-6">
                      {subservice.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <div className={`mt-1 w-5 h-5 rounded-full bg-linear-to-br ${subservice.color} flex items-center justify-center shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button
                        className={`bg-linear-to-r ${subservice.color} hover:opacity-90 text-white rounded-full px-8 py-6 font-semibold shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        Get Started
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>

                  <div className={`${subservice.bgColor} rounded-3xl p-8 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`bg-white rounded-2xl p-8 shadow-xl border ${subservice.borderColor}`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${subservice.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                          <subservice.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{subservice.title}</h3>
                        <p className="text-gray-600 mb-6">{subservice.description}</p>
                        <div className={`inline-flex items-center gap-2 bg-linear-to-r ${subservice.color} text-white rounded-full px-6 py-3 font-semibold`}>
                          <Sparkles size={18} />
                          Tailored Solutions
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
                );
              })}
            </div>

            <div className="mt-16">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">Other service areas</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">Explore the rest of the offering</h3>
                </div>
                <Link to="/services" className="text-sm font-semibold text-purple-700 hover:text-purple-800">
                  View all services
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {newServiceContent.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <div className={`flex items-center gap-3 bg-linear-to-r ${service.color} px-5 py-4 text-white`}>
                        <service.icon className="h-5 w-5" />
                        <span className="font-semibold">{service.title}</span>
                      </div>
                      {/* <div className="p-5">
                        <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                      </div> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Choose a service area</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
                Select the area that best matches your need
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Each area opens its own service page so you can explore the relevant support in more detail.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {newServiceContent.map((service, idx) => (
                <MotionDiv
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Link to={`/services/${service.slug}`} className="group block h-full">
                    <div className="h-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                      <div className={`flex h-36 items-center justify-between bg-linear-to-br ${service.color} px-6 text-white`}>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Service Area</p>
                          <h3 className="mt-2 text-2xl font-bold leading-tight">{service.title}</h3>
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                          <service.icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700">
                          View service
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection cta={serviceCTA} />
    </div>
  );
}