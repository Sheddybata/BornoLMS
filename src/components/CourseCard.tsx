import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseCardProps {
  title: string;
  instructor: string;
  level: string;
  category: string;
  image: string;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  instructor, 
  level, 
  category, 
  image,
  onClick 
}) => {
  const { t } = useLanguage();
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" onClick={onClick}>
      <CardHeader className="p-0">
        <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge className="bg-green-500 text-white text-xs">
              {category}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {level}
            </Badge>
          </div>
          
          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
            {title}
          </CardTitle>
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {instructor}
          </p>
          
          <Button 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
            }}
          >
            {t('startLearning')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;