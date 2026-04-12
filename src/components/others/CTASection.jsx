import {ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import {motion} from "framer-motion";

const MotionDiv = motion.div;

export default function CTASection(cta) {
  return (
    <section className="py-24 bg-linear-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              {cta?.callToActionTitle || "Ready to Amplify Your Business?"}
            </h2>
            <p className=" text-purple-100/80 leading-relaxed mb-10">
              {cta?.callToActionDescription || "Let's discuss how we can help transform your business and achieve your goals together."}
            </p>
            <Link to={'/Contact'}>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-10 py-6 font-semibold shadow-xl transition-all duration-300 hover:scale-105"
              >
                {cta?.callToActionButtonText || "Contact Us"}   
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </section>
  )
}
