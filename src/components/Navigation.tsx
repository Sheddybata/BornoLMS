import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bell,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  onToggleSidebar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        {/* Left side - Search and Filters */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 w-full sm:max-w-2xl order-1 sm:order-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses, instructors, or topics..."
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
          
          <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
        </div>

        {/* Center - Language Selector */}
        <div className="flex items-center order-3 sm:order-2">
          <LanguageSelector />
        </div>

        {/* Right side - View toggle and notifications */}
        <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-3">
          <div className="flex items-center border border-gray-200 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 sm:px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 sm:px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>
          
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
            <span className="text-white text-sm font-semibold">BS</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;