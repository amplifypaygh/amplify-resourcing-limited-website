import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

const MotionDiv = motion.div;

export default function HeroSection({ heroContent }) {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Users size={16} className="text-purple-300" />
              <span className="text-purple-200 text-sm font-semibold uppercase tracking-wide">{heroContent?.subtitle}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                {heroContent?.title}
              <span className="text-transparent pl-2 bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">{heroContent?.highlightedText}</span>
            </h1>
            <p className=" text-purple-100/80 leading-relaxed">
              {heroContent?.description}
            </p>
          </MotionDiv>
        </div>
      </section>
  )
}
