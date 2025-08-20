import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  ChevronDown, 
  Check,
  Flag
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage, languages, t } = useLanguage();
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
    console.log(`Language changed to: ${language.name} (${language.code})`);
  };

  const getLanguageDisplay = () => {
    if (currentLanguage.code === 'en') {
      return currentLanguage.name;
    }
    return currentLanguage.name;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`gap-2 hover:bg-gray-100 text-gray-700 hover:text-gray-900 ${
          currentLanguage.code !== 'en' ? 'bg-green-50 border border-green-200' : ''
        }`}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{getLanguageDisplay()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                     <div className="px-4 py-2 border-b border-gray-100">
                           <h3 className="text-sm font-semibold text-gray-900">{t('selectLanguage')}</h3>
              <p className="text-xs text-gray-500">{t('selectLanguageSecondary')}</p>
           </div>
          
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
                             className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                 currentLanguage.code === language.code ? 'bg-green-50' : ''
               }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{language.flag}</span>
                <div className="text-left">
                  <div className="font-medium text-gray-900">
                    {language.name}
                  </div>
                                     {language.code === 'ha' && (
                     <div className="text-sm text-gray-600 font-hausa">
                       {language.nativeName}
                     </div>
                   )}
                </div>
              </div>
              
                             {currentLanguage.code === language.code && (
                 <Check className="h-4 w-4 text-green-600" />
               )}
            </button>
          ))}
          
                     <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
             <div className="flex items-center gap-2 text-xs text-gray-500">
               <Flag className="h-3 w-3" />
               <span>{t('bornoStateLanguages')}</span>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
