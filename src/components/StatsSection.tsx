import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Users,
  BookOpen,
  Award
} from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: GraduationCap,
      title: "Total Graduates",
      value: "8,500+",
      change: "+12%",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Active Students",
      value: "12,300",
      change: "+8%",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Courses Available",
      value: "450+",
      change: "+15%",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Certificates Issued",
      value: "9,200+",
      change: "+20%",
      color: "text-orange-600"
    }
  ];

  const progressData = [
    { subject: "Technology", progress: 85, color: "bg-blue-500" },
    { subject: "Languages", progress: 92, color: "bg-green-500" },
    { subject: "Mathematics", progress: 78, color: "bg-purple-500" },
    { subject: "Sciences", progress: 88, color: "bg-orange-500" },
    { subject: "Business", progress: 75, color: "bg-pink-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Learning Impact
        </h2>
        <p className="text-gray-600">
          See how we're transforming digital literacy education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <span className={`text-sm font-semibold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.title}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Course Completion Rates by Category
          </h3>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-gray-700">
                  {item.subject}
                </div>
                <div className="flex-1">
                  <Progress value={item.progress} className="h-2.5" />
                </div>
                <div className="w-12 text-sm font-semibold text-gray-900">
                  {item.progress}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSection;