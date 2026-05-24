import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ctaImage from '@/assets/ready-to-work-with-us.jpg';

const MotionDiv = motion.div;

export default function CTASection({ callToActionTitle, callToActionDescription, callToActionButtonText } = {}) {
  const title = callToActionTitle || 'Ready to Transform';
  const description = callToActionDescription || "Partner with Amplify Resourcing Limited to streamline your operations, elevate your workforce, and scale your business with smart HR, technology, and automation solutions.";
  const buttonText = callToActionButtonText || 'Get Started';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-linear-to-br from-primary-dark via-primary to-primary-dark rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>

            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {title}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-white"> Your Business?</span>
                  </h2>
                  <p className=" text-white/85 leading-relaxed mb-8">
                    {description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white text-primary-dark hover:bg-secondary/20 hover:text-white rounded-full px-8 py-6 font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        {buttonText}
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                    <a
                      href="https://wa.me/233556047336"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 font-semibold backdrop-blur-sm transition-all duration-300"
                      >
                        <MessageCircle className="mr-2" size={20} />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <img
                    src={ctaImage}
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
