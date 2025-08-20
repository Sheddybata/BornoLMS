import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';
import CourseDetail from './CourseDetail';
import { useLanguage } from '@/contexts/LanguageContext';

const CourseGrid: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const { t } = useLanguage();

  const courses = [
    {
      id: 'device-operation',
      title: "Device Operation and Fundamentals",
      instructor: "This module introduces the physical and conceptual parts of digital devices, providing a solid foundation for all future modules.",
      level: "Beginner",
      category: "Technology",
      image: "/Device Operation and Fundamentals.svg"
    },
    {
      id: 'internet-data-literacy',
      title: "Introduction to the Internet and Data Literacy",
      instructor: "This module shows you how to navigate the internet safely and effectively, turning you into a skilled digital information seeker",
      level: "Beginner",
      category: "Digital Literacy",
      image: "/Introduction to the Internet and Data Literacy.svg"
    },
    {
      id: 'digital-communication',
      title: "Digital Communication and Collaboration",
      instructor: "This module focuses on the tools and respectful behavior needed to be a good digital citizen in online conversations.",
      level: "Beginner",
      category: "Communication",
      image: "/Digital Communication and Collaboration.svg"
    },
    {
      id: 'digital-content-creation',
      title: "Digital Content Creation and Productivity",
      instructor: "This module is a practical guide to creating and managing digital content using applications like MS Word, Excel, and Corel Draw.",
      level: "Intermediate",
      category: "Productivity",
      image: "/Digital Content Creation and Productivity.svg"
    },
    {
      id: 'online-safety',
      title: "Online Safety and Digital Citizenship",
      instructor: "This module is dedicated to making you a smart, safe, and responsible digital citizen by covering topics from strong passwords to recognizing online scams.",
      level: "Beginner",
      category: "Security",
      image: "/Online Safety and Digital Citizenship.svg"
    },
    {
      id: 'emerging-technologies',
      title: "Introduction to Emerging Technologies and Cybersecurity",
      instructor: "This module provides a brief introduction to transformative technologies and an overview of cybersecurity",
      level: "Intermediate",
      category: "Technology",
      image: "/Introduction to Emerging Technologies and Cybersecurity.svg"
    },
    {
      id: 'capstone-project',
      title: "Capstone Project and Pathway to Opportunities",
      instructor: "This final module allows you to bring all your learned skills together in a practical project and prepare for the next step in your digital journey",
      level: "Advanced",
      category: "Project",
      image: "/Capstone Project and Pathway to Opportunities.svg"
    }
  ];

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  // If a course is selected, show the course detail view
  if (selectedCourse) {
    return <CourseDetail onBack={handleBackToCourses} courseId={selectedCourse} />;
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{t('welcomeToProgram')}</h1>
        <blockquote className="text-lg text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
          {t('engrKabirQuote')}
          <footer className="mt-4 text-base font-semibold text-green-600">
            — Engr. Kabir Mohammed Wanori FNSE<br />
            <span className="text-sm text-gray-600">Executive Secretary BICTDA</span>
          </footer>
        </blockquote>
      </div>

      {/* View All Courses Button */}
      <div className="text-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
          {t('viewAll')}
        </Button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            level={course.level}
            category={course.category}
            image={course.image}
            onClick={() => handleCourseClick(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;