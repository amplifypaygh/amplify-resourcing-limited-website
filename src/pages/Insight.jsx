import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Calendar,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { insightPosts, insightHero, insightCTA } from '@/lib/content';
import HeroSection from '@/components/others/HeroSection';
import CTASection from '@/components/others/CTASection';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const categoryColors = {
  'HR Insights': 'bg-purple-100 text-purple-700',
  'Leadership': 'bg-blue-100 text-blue-700',
  'Workplace Culture': 'bg-pink-100 text-pink-700',
  'Compliance': 'bg-emerald-100 text-emerald-700',
  'Talent Management': 'bg-orange-100 text-orange-700',
};

export default function Insights() {
  const displayPosts = insightPosts;
  const featuredPost = displayPosts[0];
  const otherPosts = displayPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection heroContent={insightHero} />
      

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-linear-to-br from-purple-50 to-white rounded-3xl overflow-hidden">
              <div className="relative h-80 lg:h-full">
                <img
                  src={featuredPost?.image_url}
                  alt={featuredPost?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[featuredPost?.category] || 'bg-gray-100 text-gray-700'}`}>
                    {featuredPost?.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredPost?.created_date ? format(new Date(featuredPost.created_date), 'MMM d, yyyy') : ''}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost?.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {featuredPost?.excerpt}
                </p>
                <Button
                  className="bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-8 py-3 font-semibold"
                >
                  Read Article
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, idx) => (
              <MotionArticle
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.created_date ? format(new Date(post.created_date), 'MMM d, yyyy') : ''}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTASection ctaContent={insightCTA} />
    </div>
  );
}