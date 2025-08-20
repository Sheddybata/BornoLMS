import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Clock, 
  Globe, 
  Search, 
  Plus, 
  X,
  Sun,
  Moon,
  Sunrise,
  Sunset
} from 'lucide-react';

interface TimeZone {
  id: string;
  city: string;
  country: string;
  timezone: string;
  offset: number;
  flag: string;
}

const WorldClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddTimezone, setShowAddTimezone] = useState(false);
  const [customTimezones, setCustomTimezones] = useState<TimeZone[]>([]);
  const { t } = useLanguage();

  // Default timezones
  const defaultTimezones: TimeZone[] = [
    { id: 'utc', city: 'UTC', country: 'Coordinated Universal Time', timezone: 'UTC', offset: 0, flag: '🌍' },
    { id: 'lagos', city: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos', offset: 1, flag: '🇳🇬' },
    { id: 'maiduguri', city: 'Maiduguri', country: 'Nigeria', timezone: 'Africa/Lagos', offset: 1, flag: '🇳🇬' },
    { id: 'london', city: 'London', country: 'United Kingdom', timezone: 'Europe/London', offset: 0, flag: '🇬🇧' },
    { id: 'newyork', city: 'New York', country: 'USA', timezone: 'America/New_York', offset: -5, flag: '🇺🇸' },
    { id: 'tokyo', city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', offset: 9, flag: '🇯🇵' },
    { id: 'dubai', city: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', offset: 4, flag: '🇦🇪' },
    { id: 'sydney', city: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', offset: 10, flag: '🇦🇺' },
  ];

  const allTimezones = [...defaultTimezones, ...customTimezones];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get time for a specific timezone
  const getTimeForTimezone = (timezone: string, offset: number) => {
    const utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const targetTime = new Date(utc + (offset * 3600000));
    return targetTime;
  };

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get time of day indicator
  const getTimeOfDay = (date: Date) => {
    const hour = date.getHours();
    if (hour >= 6 && hour < 12) return { icon: <Sunrise className="h-4 w-4 text-orange-500" />, label: 'Morning' };
    if (hour >= 12 && hour < 17) return { icon: <Sun className="h-4 w-4 text-yellow-500" />, label: 'Afternoon' };
    if (hour >= 17 && hour < 20) return { icon: <Sunset className="h-4 w-4 text-red-500" />, label: 'Evening' };
    return { icon: <Moon className="h-4 w-4 text-blue-500" />, label: 'Night' };
  };

  // Filter timezones based on search
  const filteredTimezones = allTimezones.filter(tz =>
    tz.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tz.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add custom timezone
  const addCustomTimezone = (city: string, country: string, timezone: string, offset: number) => {
    const newTimezone: TimeZone = {
      id: `custom-${Date.now()}`,
      city,
      country,
      timezone,
      offset,
      flag: '🌍'
    };
    setCustomTimezones(prev => [...prev, newTimezone]);
    setShowAddTimezone(false);
  };

  return (
    <div className="space-y-6">
                 {/* Header */}
           <div className="flex items-center justify-between">
             <div>
               <h1 className="text-3xl font-bold text-gray-900">{t('worldClockTitle')}</h1>
               <p className="text-gray-600 mt-1">{t('worldClockSubtitle')}</p>
             </div>
             <Button
               onClick={() => setShowAddTimezone(true)}
               className="bg-green-600 hover:bg-green-700 text-white gap-2"
             >
               <Plus className="h-4 w-4" />
               {t('addTimezone')}
             </Button>
           </div>

                 {/* Search Bar */}
           <div className="relative">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
             <input
               type="text"
               placeholder={t('search')}
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white shadow-sm"
             />
           </div>

                 {/* Current Local Time */}
           <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
             <CardHeader>
               <CardTitle className="flex items-center gap-2 text-green-800">
                 <Clock className="h-5 w-5" />
                 {t('currentLocalTime')}
               </CardTitle>
             </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">
              {formatTime(currentTime)}
            </div>
            <div className="text-lg text-green-600">
              {formatDate(currentTime)}
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
              {getTimeOfDay(currentTime).icon}
              <span className="text-green-700 font-medium">
                {getTimeOfDay(currentTime).label}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timezone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTimezones.map((tz) => {
          const tzTime = getTimeForTimezone(tz.timezone, tz.offset);
          const timeOfDay = getTimeOfDay(tzTime);
          const isLocal = tz.timezone === 'UTC' && tz.offset === 0;
          
          return (
            <Card 
              key={tz.id} 
              className={`hover:shadow-lg transition-all duration-200 cursor-pointer ${
                isLocal ? 'ring-2 ring-green-500 bg-green-50' : 'bg-white'
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tz.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tz.city}</h3>
                      <p className="text-sm text-gray-600">{tz.country}</p>
                    </div>
                  </div>
                  {isLocal && (
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      Local
                    </Badge>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatTime(tzTime)}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {formatDate(tzTime)}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {timeOfDay.icon}
                    <span className="text-xs text-gray-500">
                      {timeOfDay.label}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>UTC{tz.offset >= 0 ? '+' : ''}{tz.offset}</span>
                    <span>{tz.timezone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add Timezone Modal */}
      {showAddTimezone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {t('addTimezone')}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAddTimezone(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                addCustomTimezone(
                  formData.get('city') as string,
                  formData.get('country') as string,
                  formData.get('timezone') as string,
                  parseInt(formData.get('offset') as string)
                );
              }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Paris"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., France"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone
                  </label>
                  <input
                    name="timezone"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Europe/Paris"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UTC Offset (hours)
                  </label>
                  <input
                    name="offset"
                    type="number"
                    required
                    min="-12"
                    max="14"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 1"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('addTimezone')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddTimezone(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WorldClock;
