import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import CourseGrid from './CourseGrid';
import NigeriasLeaders from './NigeriasLeaders';
import WorldClock from './WorldClock';
import DailyDigest from './DailyDigest';

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (view: string) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <CourseGrid />;
      case 'nigeria-leaders':
        return <NigeriasLeaders />;
      case 'world-clock':
        return <WorldClock />;
      case 'daily-digest':
        return <DailyDigest />;
      default:
        return <CourseGrid />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} onNavigate={handleNavigation} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <Navigation onToggleSidebar={toggleSidebar} />
        
        {/* Main Content with Scroll */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
