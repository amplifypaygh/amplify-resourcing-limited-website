import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  CheckCircle,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { newServiceContent as serviceCatalog, ContactHero } from '@/lib/content';
import HeroSection from '@/components/others/HeroSection';
import { emailTemplates } from "@/lib/emailTemplates";
import { LinkedinIcon, WhatsAppIcon, FacebookIcon, InstagramIcon } from '@/components/SocialMediaIcons';


const MotionDiv = motion.div;

const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@amplifyresourcing.com';
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const contactServices = [...serviceCatalog.map((service) => service.title), 'General Inquiry'];



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError('Email delivery is not configured yet. Please add EmailJS environment keys.');
      return;
    }

    const selectedService = formData.service_interest || 'General Inquiry';
    const template = emailTemplates[selectedService] || emailTemplates['General Inquiry'];

    const subject = `${template.subject} - ${formData.company || formData.name || 'Website Enquiry'}`;
    const body = [
      'Hello Amplify Resourcing Limited,',
      '',
      template.intro,
      '',
      'Contact details:',
      `Name: ${formData.name || 'N/A'}`,
      `Email: ${formData.email || 'N/A'}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `Company: ${formData.company || 'N/A'}`,
      `Service Interest: ${selectedService}`,
      '',
      'Message:',
      formData.message || 'N/A',
      '',
      template.nextStep,
      '',
      'Regards,',
      formData.name || 'Website Visitor',
    ].join('\n');

    setIsSending(true);
    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          to_email: recipientEmail,
          reply_to: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'N/A',
          company: formData.company || 'N/A',
          service_interest: selectedService,
          subject,
          message: body,
        },
        {
          publicKey: emailJsPublicKey,
        }
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSubmitError('We could not send your message right now. Please try again shortly.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection heroContent={ContactHero} />

      {/* Contact Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className=" text-gray-600 leading-relaxed">
                  Have a question or want to work with us? We'd love to hear from you. Here's how you can reach us.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`mailto:${recipientEmail}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-purple-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-purple-600">{recipientEmail}</p>
                  </div>
                </a>

                <a
                  href="tel:+233556047336"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-blue-600">+233556047336</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/233556047336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-green-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-green-600">Chat with us instantly</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">No. 9 Nii Sai Road, East Legon, Accra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/amplify-resourcing-limited', color: 'hover:bg-blue-600' },
                    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/233556047336', color: 'hover:bg-green-600' },
                    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/amplifyresourcing', color: 'hover:bg-blue-700' },
                    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/amplifyresourcing', color: 'hover:bg-pink-600' },
                  ].map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.name}
                        className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300`}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You!
                    </h3>
                    <p className=" text-gray-600 mb-8">
                      Your message was sent successfully. We will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-8 py-3"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="John Doe"
                            required
                            className="h-12 rounded-xl input-field"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="john@company.com"
                            required
                            className="h-12 rounded-xl input-field"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+233 00 000 0000"
                            required
                            className="h-12 rounded-xl input-field"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            placeholder="Your Company"
                            className="h-12 rounded-xl input-field"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest <span className="text-red-500">*</span></Label>
                        <Select
                          value={formData.service_interest}
                          onValueChange={(value) => handleChange('service_interest', value)}
                          required
                        >
                          <SelectTrigger className="h-16 rounded-xl input-field">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="rounded-md border-none bg-white shadow-lg">
                            {contactServices.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your needs..."
                          required
                          className="min-h-37.5 rounded-xl resize-none input-field"
                        />
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                          {submitError}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        {isSending ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2" size={20} />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
