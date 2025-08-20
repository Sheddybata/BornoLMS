import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Home, 
  Users, 
  Clock,
  Newspaper,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, onNavigate }) => {
  const { t } = useLanguage();
  
  const menuItems = [
    { icon: Home, label: t('dashboard'), view: 'dashboard', active: true },
    { icon: Users, label: t('nigeriaLeaders'), view: 'nigeria-leaders', active: false },
    { icon: Clock, label: t('worldClock'), view: 'world-clock', active: false },
    { icon: Newspaper, label: t('dailyDigest'), view: 'daily-digest', active: false },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: t('settings'), view: 'settings' },
  ];

  const handleMenuClick = (view: string) => {
    onNavigate(view);
  };

  return (
    <div className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                Digital Literacy Virtual Academy
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-1 h-8 w-8 flex-shrink-0"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => handleMenuClick(item.view)}
            className={`w-full justify-start h-11 ${
              isOpen ? 'px-3' : 'px-2 justify-center'
            } hover:bg-green-50 hover:text-green-700`}
          >
            <item.icon className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
            {isOpen && <span>{item.label}</span>}
          </Button>
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="p-3 border-t border-gray-200 space-y-2">
        {bottomMenuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => handleMenuClick(item.view)}
            className={`w-full justify-start h-11 ${
              isOpen ? 'px-3' : 'px-2 justify-center'
            } hover:bg-gray-50`}
          >
            <item.icon className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
            {isOpen && <span>{item.label}</span>}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
