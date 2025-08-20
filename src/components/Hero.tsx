import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Digital Literacy
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">
              Virtual Academy
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Empowering minds, building futures. Join thousands of learners in our premier digital literacy platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto">
              Browse Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 px-4 sm:px-0">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-xs sm:text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">10K+</div>
              <div className="text-white/80 text-xs sm:text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">95%</div>
              <div className="text-white/80 text-xs sm:text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-xs sm:text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;