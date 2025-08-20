import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  BookOpen, 
  Calendar,
  Sparkles,
  Lightbulb,
  TrendingUp,
  Newspaper,
  Share2
} from 'lucide-react';

interface TechQuote {
  quote: string;
  author: string;
  category: string;
}

interface WordOfTheDay {
  word: string;
  definition: string;
  example: string;
  category: string;
}

const DailyDigest: React.FC = () => {
  const [currentDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  // Tech quotes collection
  const techQuotes: TechQuote[] = [
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      category: "Innovation"
    },
    {
      quote: "Technology is best when it brings people together.",
      author: "Matt Mullenweg",
      category: "Connection"
    },
    {
      quote: "The computer was born to solve problems that did not exist before.",
      author: "Bill Gates",
      category: "Problem Solving"
    },
    {
      quote: "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "Arthur C. Clarke",
      category: "Perspective"
    },
    {
      quote: "The advance of technology is based on making it fit in so that you don't really even notice it.",
      author: "Douglas Adams",
      category: "Design"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: "Leadership"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "Vision"
    },
    {
      quote: "Technology is nothing. What's important is that you have a faith in people.",
      author: "Steve Jobs",
      category: "Humanity"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Passion"
    },
    {
      quote: "Stay hungry, stay foolish.",
      author: "Stewart Brand",
      category: "Growth"
    },
    {
      quote: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
      category: "User Experience"
    },
    {
      quote: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      category: "Code Quality"
    },
    {
      quote: "The most damaging phrase in the language is 'We've always done it this way!'",
      author: "Grace Hopper",
      category: "Change"
    },
    {
      quote: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
      category: "Design"
    },
    {
      quote: "The future is already here – it's just not evenly distributed.",
      author: "William Gibson",
      category: "Future"
    }
  ];

  // Words of the day collection
  const wordsOfTheDay: WordOfTheDay[] = [
    {
      word: "Algorithm",
      definition: "A set of rules or instructions given to a computer to help it solve a problem.",
      example: "Google uses complex algorithms to rank search results.",
      category: "Programming"
    },
    {
      word: "API",
      definition: "Application Programming Interface - a set of rules that allows programs to talk to each other.",
      example: "Social media apps use APIs to share content across platforms.",
      category: "Development"
    },
    {
      word: "Blockchain",
      definition: "A distributed digital ledger that records transactions across multiple computers securely.",
      example: "Bitcoin uses blockchain technology to track cryptocurrency transactions.",
      category: "Emerging Tech"
    },
    {
      word: "Cloud Computing",
      definition: "The delivery of computing services over the internet instead of using local servers.",
      example: "Netflix streams movies using cloud computing infrastructure.",
      category: "Infrastructure"
    },
    {
      word: "Cybersecurity",
      definition: "The practice of protecting systems, networks, and programs from digital attacks.",
      example: "Two-factor authentication is a cybersecurity measure to protect accounts.",
      category: "Security"
    },
    {
      word: "Data Mining",
      definition: "The process of analyzing large datasets to discover patterns and relationships.",
      example: "Companies use data mining to understand customer behavior and preferences.",
      category: "Analytics"
    },
    {
      word: "Encryption",
      definition: "The process of converting information into a code to prevent unauthorized access.",
      example: "HTTPS websites use encryption to protect your data when shopping online.",
      category: "Security"
    },
    {
      word: "Firewall",
      definition: "A network security device that monitors and filters incoming and outgoing network traffic.",
      example: "Your home router has a built-in firewall to protect your devices from cyber threats.",
      category: "Security"
    },
    {
      word: "Machine Learning",
      definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
      example: "Recommendation systems on YouTube use machine learning to suggest videos.",
      category: "Artificial Intelligence"
    },
    {
      word: "Open Source",
      definition: "Software whose source code is freely available for modification and distribution.",
      example: "Linux is an open-source operating system used by millions of people worldwide.",
      category: "Software"
    },
    {
      word: "Protocol",
      definition: "A set of rules that govern how data is transmitted and received between devices.",
      example: "HTTP is a protocol that defines how web browsers communicate with web servers.",
      category: "Networking"
    },
    {
      word: "Responsive Design",
      definition: "A design approach that ensures websites work well on all devices and screen sizes.",
      example: "Modern websites automatically adjust their layout for mobile phones and tablets.",
      category: "Web Design"
    },
    {
      word: "Scalability",
      definition: "The ability of a system to handle increased load without affecting performance.",
      example: "Cloud platforms like AWS provide scalability to handle traffic spikes during major events.",
      category: "Architecture"
    },
    {
      word: "Virtual Reality",
      definition: "A computer-generated simulation that immerses users in a 3D environment.",
      example: "VR headsets allow gamers to experience immersive virtual worlds.",
      category: "Emerging Tech"
    },
    {
      word: "Zero-Day",
      definition: "A software vulnerability that is exploited by hackers before the vendor becomes aware of it.",
      example: "Security researchers work to discover zero-day vulnerabilities before cybercriminals do.",
      category: "Security"
    }
  ];

  // Get daily index based on date (changes every day)
  useEffect(() => {
    const dayOfYear = Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % techQuotes.length;
    const wordIndex = dayOfYear % wordsOfTheDay.length;
    setCurrentIndex(quoteIndex);
  }, [currentDate]);

  const currentQuote = techQuotes[currentIndex];
  const currentWord = wordsOfTheDay[currentIndex];

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % techQuotes.length);
  };

  const previousItem = () => {
    setCurrentIndex((prev) => (prev - 1 + techQuotes.length) % techQuotes.length);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
            <Newspaper className="h-8 w-8 text-white" />
          </div>
                          <div>
                  <h1 className="text-4xl font-bold text-gray-900">{t('dailyDigestTitle')}</h1>
                  <p className="text-lg text-gray-600">{t('dailyDoseOfTech')}</p>
                </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(currentDate)}</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={previousItem}
          variant="outline"
          size="lg"
          className="gap-2 hover:bg-green-50 hover:border-green-300"
        >
          <ChevronLeft className="h-5 w-5" />
          {t('previous')}
        </Button>
        
        <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm">
          {currentIndex + 1} of {techQuotes.length}
        </Badge>
        
        <Button
          onClick={nextItem}
          variant="outline"
          size="lg"
          className="gap-2 hover:bg-green-50 hover:border-green-300"
        >
          {t('next')}
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tech Quote Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Quote className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-blue-900">{t('techQuoteOfTheDay')}</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">
                  {currentQuote.category}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="text-lg italic text-blue-800 leading-relaxed">
              "{currentQuote.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold text-sm">
                    {currentQuote.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-semibold text-blue-900">{currentQuote.author}</span>
              </div>
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        {/* Word of the Day Card */}
        <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-emerald-900">{t('wordOfTheDay')}</CardTitle>
                <Badge className="bg-emerald-100 text-emerald-800 text-xs mt-1">
                  {currentWord.category}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-800 mb-2">
                {currentWord.word}
              </h3>
              <div className="w-16 h-1 bg-emerald-300 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-1">{t('definition')}</h4>
                <p className="text-emerald-700 leading-relaxed">
                  {currentWord.definition}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-emerald-800 mb-1">{t('example')}</h4>
                <p className="text-emerald-700 leading-relaxed italic">
                  "{currentWord.example}"
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-end">
              <Lightbulb className="h-5 w-5 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Insight */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <TrendingUp className="h-5 w-5" />
            {t('dailyInsight')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-800 leading-relaxed">
            <strong>{t('todaysFocus')}</strong> Embrace the intersection of {currentQuote.category.toLowerCase()} and {currentWord.category.toLowerCase()}. 
            The best technologists understand that innovation comes from connecting different domains of knowledge. 
            Use today's quote as inspiration and the new vocabulary to expand your technical communication skills.
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          className="gap-2 hover:bg-green-50 hover:border-green-300"
        >
          <BookOpen className="h-4 w-4" />
          {t('saveToBookmarks')}
        </Button>
        <Button
          variant="outline"
          className="gap-2 hover:border-green-300"
        >
          <Share2 className="h-4 w-4" />
          {t('shareTodaysDigest')}
        </Button>
      </div>
    </div>
  );
};

export default DailyDigest;
