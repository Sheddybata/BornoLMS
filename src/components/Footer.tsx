import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Borno LMS</h3>
            </div>
            <p className="text-gray-600 mb-3 text-sm">
              Empowering the future of Borno State through quality digital education and innovative learning solutions.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-100">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-100">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-100">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-gray-100">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Languages</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Mathematics</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Sciences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-900">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Maiduguri, Borno State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 803 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@bornolms.edu.ng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 Borno State Learning Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;