import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Check, 
  ArrowRight,
  Lightbulb,
  Rocket,
  Heart,
  Shield,
  GraduationCap,
  UserSearch,
  Sparkles,
} from 'lucide-react';

export const AboutCTA = {
    callToActionTitle: "Ready to Partner with Us?",
    callToActionDescription: "Let's discuss how we can help transform your business and achieve your goals together.",
    callToActionButtonText: "Get in Touch"
}

export const serviceCTA = {
    callToActionTitle: "Need a Custom Solution?",
    callToActionDescription: "We understand every business is unique. Let's discuss your specific needs and create a tailored approach that works for you.",
    callToActionButtonText: "Contact Us Today"
}

export const insightCTA = {
    callToActionTitle: "Stay Updated",
    callToActionDescription: "Get the latest HR insights and industry updates delivered straight to your inbox.",
    callToActionButtonText: "Subscribe to Updates"
}

export const AboutHero = {
    title: "Discover the Mission Behind",
    subtitle: "About Us",
    description: "Empowering organizations through people, process, and innovation since day one.",
    highlightedText:"Amplify Resourcing"
}

export const serviceHero = {
    title: "Empowering Businesses with",
    subtitle: "Our Services",
    description: "Discover our integrated services designed to support and scale your business efficiently.",
    highlightedText:" Smart Solutions"
}

export const ContactHero = {
    title: "Let's Start a",
    subtitle: "Get in Touch",
    description: "Ready to transform your business? We're here to help. Reach out and let's discuss how we can work together.",
    highlightedText:" Conversation"
}
export const insightHero = {
    title: "HR Knowledge &",
    subtitle: "Insights & Resources",
    description: "Stay informed with the latest trends, best practices, and expert advice in human resources and business growth.",
    highlightedText:" Industry Insights"
}

export const insightPosts = [
  {
    id: 1,
    title: '5 Key Trends Shaping the Future of HR in 2024',
    excerpt: 'Discover the emerging trends that are transforming how businesses approach human resources and talent management.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    category: 'HR Insights',
    created_date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Building a Strong Company Culture: A Practical Guide',
    excerpt: 'Learn actionable strategies to create and maintain a workplace culture that attracts and retains top talent.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    category: 'Workplace Culture',
    created_date: '2024-01-10',
  },
  {
    id: 3,
    title: 'The Art of Effective Leadership in Modern Organizations',
    excerpt: 'Explore the qualities and practices that define successful leaders in today\'s dynamic business environment.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    category: 'Leadership',
    created_date: '2024-01-05',
  },
  {
    id: 4,
    title: 'Navigating Employment Law: What Every Business Must Know',
    excerpt: 'Stay compliant with the latest employment regulations and protect your business from legal risks.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    category: 'Compliance',
    created_date: '2024-01-01',
  },
  {
    id: 5,
    title: 'Talent Acquisition Strategies That Actually Work',
    excerpt: 'Proven methods to attract, screen, and hire the best candidates for your organization.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    category: 'Talent Management',
    created_date: '2023-12-28',
  },
  {
    id: 6,
    title: 'Employee Engagement: Metrics That Matter',
    excerpt: 'Understanding and measuring employee engagement to drive productivity and retention.',
    content: '',
    image_url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    category: 'HR Insights',
    created_date: '2023-12-20',
  },
];

export const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace technology and creativity to provide forward-thinking solutions that keep you ahead.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team consists of skilled professionals with in-depth knowledge across various industries.',
  },
  {
    icon: Rocket,
    title: 'Cost-effectiveness',
    description: 'We offer tailored services that help businesses optimize resources and reduce overhead costs.',
  },
  {
    icon: Users,
    title: 'Flexibility',
    description: 'Our solutions are scalable, allowing organizations to adjust services as their needs evolve.',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'We ensure that businesses adhere to all relevant industry regulations and best practices.',
  },
  {
    icon: Heart,
    title: 'People-First',
    description: 'At our core, we believe in putting people first in every strategy and solution we develop.',
  },
];

export const approach = [
  {
    step: '01',
    title: 'Assess',
    description: 'We begin by evaluating your business needs across HR, operations, and technology to uncover growth opportunities and performance gaps.',
  },
  {
    step: '02',
    title: 'Implement',
    description: 'Our team develops and deploys tailored solutions — from HR strategies to digital tools and automated processes — aligned with your business goals.',
  },
  {
    step: '03',
    title: 'Evaluate',
    description: 'We monitor outcomes, measure impact, and refine strategies to ensure long-term efficiency, productivity, and growth.',
  },
];

export const services = [
  {
    icon: Users,
    title: 'HR Advisory',
    description: 'Strategic HR guidance to build strong organizational foundations and optimize your people processes.',
    features: [
      'HR strategy development and alignment',
      'Organizational structure design',
      'HR process optimization',
      'Change management support',
      'HR audit and assessment',
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: UserSearch,
    title: 'Talent Acquisition',
    description: 'Find and attract the right talent with our comprehensive recruitment and selection strategies.',
    features: [
      'End-to-end recruitment services',
      'Executive search and headhunting',
      'Candidate screening and assessment',
      'Employer branding strategy',
      'Onboarding program design',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Shield,
    title: 'Compliance & Policy',
    description: 'Ensure your organization meets all regulatory requirements with robust policies and procedures.',
    features: [
      'Employment law compliance',
      'HR policy development',
      'Employee handbook creation',
      'Workplace investigation support',
      'Regulatory audit preparation',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Upskill your workforce with tailored training programs that drive performance and growth.',
    features: [
      'Leadership development programs',
      'Skills gap analysis',
      'Custom training design',
      'E-learning solutions',
      'Performance coaching',
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Heart,
    title: 'Culture & Retention',
    description: 'Build a thriving workplace culture that attracts, engages, and retains top talent.',
    features: [
      'Employee engagement surveys',
      'Culture assessment and design',
      'Retention strategy development',
      'Recognition program design',
      'Wellness program implementation',
    ],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    icon: Sparkles,
    title: 'Technology Solutions',
    description: 'Harness the power of technology to optimize your HR processes and drive innovation.',
    features: [
      'Custom HR software implementation',
      'Automated and AI-powered Solutions',
      'Performance management systems',
      'Employee self-service portals',
      'Data analytics and reporting',
    ],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  }
];

const ContactServices = [
  'HR Advisory',
  'Talent Acquisition',
  'Compliance & Policy',
  'Training & Development',
  'Culture & Retention',
  'Technology Solutions',
  'General Inquiry',
];
