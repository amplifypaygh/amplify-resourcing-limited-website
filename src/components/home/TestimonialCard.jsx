import { Quote, Star } from 'lucide-react';

export default function TestimonialCard ({ testimonial }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 overflow-hidden h-full border border-primary/10">
      {/* Quote Icon */}
      <div className="absolute top-8 right-8 opacity-10">
        <Quote size={120} className="text-primary-dark" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="fill-[#FFD400] text-[#FFD400]" />
        ))}
      </div>

      {/* Content */}
      <p className=" text-gray-700 leading-relaxed mb-8 italic">
        "{testimonial?.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial?.image_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80'}
          alt={testimonial?.name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/10"
        />
        <div>
          <h4 className="font-bold text-gray-900">
            {testimonial?.name}
          </h4>
          <p className="text-sm text-primary-dark font-medium">
            {testimonial?.role}
          </p>
          {testimonial?.company && (
            <p className="text-gray-500 text-xs">
              {testimonial?.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
