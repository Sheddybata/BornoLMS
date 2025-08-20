import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smartphone, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Award,
  Video,
  MessageCircle
} from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Learn anywhere, anytime with our mobile-optimized platform designed for Borno State students.",
      color: "bg-blue-500"
    },
    {
      icon: Video,
      title: "Interactive Videos",
      description: "Engaging video content with local instructors speaking in English and Hausa languages.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with fellow students across Borno State and learn together in study groups.",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Earn recognized certificates that boost your career prospects in Nigeria.",
      color: "bg-orange-500"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace with courses designed to fit around your daily commitments.",
      color: "bg-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and progress are protected with enterprise-grade security measures.",
      color: "bg-indigo-500"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Get help whenever you need it from our dedicated support team in multiple languages.",
      color: "bg-teal-500"
    },
    {
      icon: Globe,
      title: "Offline Access",
      description: "Download courses for offline study, perfect for areas with limited internet connectivity.",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="space-y-6 px-4 sm:px-0">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Why Choose Digital Literacy Virtual Academy?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Built specifically for the unique needs of digital literacy learners with cutting-edge features
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 bg-white">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className={`${feature.color} p-2 sm:p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;