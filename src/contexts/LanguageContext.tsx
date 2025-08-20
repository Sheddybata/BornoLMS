import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Translations {
  // Navigation
  dashboard: string;
  nigeriaLeaders: string;
  worldClock: string;
  dailyDigest: string;
  settings: string;
  
  // Header
  welcomeToProgram: string;
  engrKabirQuote: string;
  
  // Course related
  startLearning: string;
  courseProgress: string;
  lessons: string;
  completed: string;
  locked: string;
  takeQuiz: string;
  markComplete: string;
  assessmentAndReview: string;
  videoLesson: string;
  courseResources: string;
  whatYoullLearn: string;
  completeLessonsForCertificate: string;
  courseMaterials: string;
  videoTutorials: string;
  practiceFiles: string;
  downloadableGuides: string;
  stepByStepVideo: string;
  handsOnExercises: string;
  trackLearningJourney: string;
  
  // Quiz related
  quizTitle: string;
  question: string;
  of: string;
  submitQuiz: string;
  backToCourse: string;
  quizCompleted: string;
  yourScore: string;
  correctAnswers: string;
  totalQuestions: string;
  
  // World Clock
  worldClockTitle: string;
  worldClockSubtitle: string;
  addTimezone: string;
  selectLanguage: string;
  currentLocalTime: string;
  bornoStateLanguages: string;
  
  // Daily Digest
  dailyDigestTitle: string;
  techQuoteOfTheDay: string;
  wordOfTheDay: string;
  dailyInsight: string;
  previous: string;
  next: string;
  saveToBookmarks: string;
  shareTodaysDigest: string;
  dailyDoseOfTech: string;
  definition: string;
  example: string;
  todaysFocus: string;
  selectLanguageSecondary: string;
  
  // Nigeria Leaders
  nigeriasLeadersTitle: string;
  nigeriasLeadersSubtitle: string;
  bornoStateLeadersTitle: string;
  bornoStateLeadersSubtitle: string;
  
  // Common
  search: string;
  filter: string;
  viewAll: string;
  loading: string;
  error: string;
  success: string;
}

const translations: Record<string, Translations> = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    nigeriaLeaders: "Nigeria's Leaders",
    worldClock: 'World Clock',
    dailyDigest: 'Daily Digest',
    settings: 'Settings',
    
    // Header
    welcomeToProgram: 'Welcome to the Program',
    engrKabirQuote: '"Digital literacy is not just about using technology; it is about understanding how to leverage it for personal and community development. In today\'s interconnected world, the ability to navigate, evaluate, and create digital content is fundamental to success in education, employment, and civic engagement."',
    
    // Course related
    startLearning: 'Start Learning',
    courseProgress: 'Course Progress',
    lessons: 'Lessons',
    completed: 'Completed',
    locked: 'Locked',
    takeQuiz: 'Take Quiz',
    markComplete: 'Mark Complete',
    assessmentAndReview: 'Assessment and Review',
    videoLesson: 'Video Lesson',
    courseResources: 'Course Resources',
    whatYoullLearn: 'What You\'ll Learn',
    completeLessonsForCertificate: 'Complete all lessons to earn your certificate',
    courseMaterials: 'Course Materials',
    videoTutorials: 'Video Tutorials',
    practiceFiles: 'Practice Files',
    downloadableGuides: 'Downloadable guides and references',
    stepByStepVideo: 'Step-by-step video instructions',
    handsOnExercises: 'Hands-on exercises and activities',
    trackLearningJourney: 'Track your learning journey through this course',
    
    // Quiz related
    quizTitle: 'Course Assessment',
    question: 'Question',
    of: 'of',
    submitQuiz: 'Submit Quiz',
    backToCourse: 'Back to Course',
    quizCompleted: 'Quiz Completed!',
    yourScore: 'Your Score',
    correctAnswers: 'Correct Answers',
    totalQuestions: 'Total Questions',
    
    // World Clock
    worldClockTitle: 'World Clock',
    worldClockSubtitle: 'Track time across different time zones',
    addTimezone: 'Add Timezone',
    selectLanguage: 'Select Language',
    currentLocalTime: 'Current Local Time',
    bornoStateLanguages: 'Borno State Languages',
    
    // Daily Digest
    dailyDigestTitle: 'Daily Digest',
    techQuoteOfTheDay: 'Tech Quote of the Day',
    wordOfTheDay: 'Word of the Day',
    dailyInsight: 'Daily Insight',
    previous: 'Previous',
    next: 'Next',
    saveToBookmarks: 'Save to Bookmarks',
    shareTodaysDigest: 'Share Today\'s Digest',
    dailyDoseOfTech: 'Your daily dose of tech wisdom and knowledge',
    definition: 'Definition:',
    example: 'Example:',
    todaysFocus: 'Today\'s Focus:',
    selectLanguageSecondary: 'Select Language / Zaɓi harshe',
    
    // Nigeria Leaders
    nigeriasLeadersTitle: "Nigeria's Past and Present Leaders",
    nigeriasLeadersSubtitle: 'Celebrating the leaders who have shaped our nation',
    bornoStateLeadersTitle: 'Past and Present Leaders of Borno State',
    bornoStateLeadersSubtitle: 'Honoring the leaders of our great state',
    
    // Common
    search: 'Search',
    filter: 'Filter',
    viewAll: 'View All',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success'
  },
  
  kr: {
    // Navigation
    dashboard: 'Dashboard',
    nigeriaLeaders: 'Nigeria Leaders',
    worldClock: 'World Clock',
    dailyDigest: 'Daily Digest',
    settings: 'Settings',
    
    // Header
    welcomeToProgram: 'Welcome to the Program',
    engrKabirQuote: '"Digital literacy is not just about using technology; it is about understanding how to leverage it for personal and community development. In today\'s interconnected world, the ability to navigate, evaluate, and create digital content is fundamental to success in education, employment, and civic engagement."',
    
    // Course related
    startLearning: 'Start Learning',
    courseProgress: 'Course Progress',
    lessons: 'Lessons',
    completed: 'Completed',
    locked: 'Locked',
    takeQuiz: 'Take Quiz',
    markComplete: 'Mark Complete',
    assessmentAndReview: 'Assessment and Review',
    videoLesson: 'Video Lesson',
    courseResources: 'Course Resources',
    whatYoullLearn: 'What You\'ll Learn',
    completeLessonsForCertificate: 'Complete all lessons to earn your certificate',
    courseMaterials: 'Course Materials',
    videoTutorials: 'Video Tutorials',
    practiceFiles: 'Practice Files',
    downloadableGuides: 'Downloadable guides and references',
    stepByStepVideo: 'Step-by-step video instructions',
    handsOnExercises: 'Hands-on exercises and activities',
    trackLearningJourney: 'Track your learning journey through this course',
    
    // Quiz related
    quizTitle: 'Course Assessment',
    question: 'Question',
    of: 'of',
    submitQuiz: 'Submit Quiz',
    backToCourse: 'Back to Course',
    quizCompleted: 'Quiz Completed!',
    yourScore: 'Your Score',
    correctAnswers: 'Correct Answers',
    totalQuestions: 'Total Questions',
    
    // World Clock
    worldClockTitle: 'World Clock',
    worldClockSubtitle: 'Track time across different time zones',
    addTimezone: 'Add Timezone',
    selectLanguage: 'Select Language',
    currentLocalTime: 'Current Local Time',
    bornoStateLanguages: 'Borno State Languages',
    
    // Daily Digest
    dailyDigestTitle: 'Daily Digest',
    techQuoteOfTheDay: 'Tech Quote of the Day',
    wordOfTheDay: 'Word of the Day',
    dailyInsight: 'Daily Insight',
    previous: 'Previous',
    next: 'Next',
    saveToBookmarks: 'Save to Bookmarks',
    shareTodaysDigest: 'Share Today\'s Digest',
    dailyDoseOfTech: 'Your daily dose of tech wisdom and knowledge',
    definition: 'Definition:',
    example: 'Example:',
    todaysFocus: 'Today\'s Focus:',
    selectLanguageSecondary: 'Select Language / Zaɓi harshe',
    
    // Nigeria Leaders
    nigeriasLeadersTitle: "Nigeria's Past and Present Leaders",
    nigeriasLeadersSubtitle: 'Celebrating the leaders who have shaped our nation',
    bornoStateLeadersTitle: 'Past and Present Leaders of Borno State',
    bornoStateLeadersSubtitle: 'Honoring the leaders of our great state',
    
    // Common
    search: 'Search',
    filter: 'Filter',
    viewAll: 'View All',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success'
  },
  
  ha: {
    // Navigation
    dashboard: 'Dashboard',
    nigeriaLeaders: 'Shugabannin Najeriya',
    worldClock: 'Agogon Duniya',
    dailyDigest: 'Taƙaitaccen Yau',
    settings: 'Saiti',
    
    // Header
    welcomeToProgram: 'Barka da zuwa ga Shirin',
    engrKabirQuote: '"Ilimin dijital ba kawai game da amfani da fasaha ba ne; yana game da fahimtar yadda ake amfani da shi don ci gaban mutum da al\'umma. A cikin duniya ta yau da ke da alaƙa, ikon tafiya, tantancewa, da ƙirƙirar abun ciki na dijital yana da muhimmanci ga nasara a ilimi, aiki, da shiga cikin al\'umma."',
    
    // Course related
    startLearning: 'Fara Koyo',
    courseProgress: 'Ci Gaban Kwas',
    lessons: 'Darussan',
    completed: 'An Kammala',
    locked: 'An Kulle',
    takeQuiz: 'Yi Tambaya',
    markComplete: 'Alama An Kammala',
    assessmentAndReview: 'Tantancewa da Bita',
    videoLesson: 'Darasi na Bidiyo',
    courseResources: 'Albarkatun Kwas',
    whatYoullLearn: 'Abin da za ka koya',
    completeLessonsForCertificate: 'Kammala dukkan darussan don samun takardar shaidar ku',
    courseMaterials: 'Albarkatun Kwas',
    videoTutorials: 'Darussan Bidiyo',
    practiceFiles: 'Fayilolin Aiki',
    downloadableGuides: 'Jagororin da za a iya saukewa da nassoshi',
    stepByStepVideo: 'Umarnin bidiyo na mataki-mataki',
    handsOnExercises: 'Ayyukan hannu da ayyuka',
    trackLearningJourney: 'Bi diddigin tafiyar koyo ta wannan kwas',
    
    // Quiz related
    quizTitle: 'Tantancewar Kwas',
    question: 'Tambaya',
    of: 'daga',
    submitQuiz: 'Aika Tambaya',
    backToCourse: 'Komawa Kwas',
    quizCompleted: 'An Kammala Tambaya!',
    yourScore: 'Makin Ka',
    correctAnswers: 'Amsoshin Daidai',
    totalQuestions: 'Jimlar Tambayoyi',
    
    // World Clock
    worldClockTitle: 'Agogon Duniya',
    worldClockSubtitle: 'Bi diddigin lokaci a yankuna daban-daban na lokaci',
    addTimezone: 'Ƙara Yankin Lokaci',
    selectLanguage: 'Zaɓi Harshe',
    currentLocalTime: 'Lokacin Gida na Yanzu',
    bornoStateLanguages: 'Harsunan Jihar Borno',
    
    // Daily Digest
    dailyDigestTitle: 'Taƙaitaccen Yau',
    techQuoteOfTheDay: 'Magana ta Fasaha ta Yau',
    wordOfTheDay: 'Kalmar Yau',
    dailyInsight: 'Fahimtar Yau',
    previous: 'Na Baya',
    next: 'Na Gaba',
    saveToBookmarks: 'Ajiye a Alamomi',
    shareTodaysDigest: 'Raba Taƙaitaccen Yau',
    dailyDoseOfTech: 'Hikimar fasaha da ilimi ta yau',
    definition: 'Ma\'ana:',
    example: 'Misali:',
    todaysFocus: 'Hankalin Yau:',
    selectLanguageSecondary: 'Zaɓi Harshe / Zaɓi harshe',
    
    // Nigeria Leaders
    nigeriasLeadersTitle: 'Shugabannin Najeriya na Baya da na Yanzu',
    nigeriasLeadersSubtitle: 'Muna murnar shugabannin da suka tsara ƙasarmu',
    bornoStateLeadersTitle: 'Shugabannin Jihar Borno na Baya da na Yanzu',
    bornoStateLeadersSubtitle: 'Muna girmama shugabannin jiharmu mai girma',
    
    // Common
    search: 'Nema',
    filter: 'Tace',
    viewAll: 'Duba Duka',
    loading: 'Ana Loda...',
    error: 'Kuskure',
    success: 'Nasara'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations) => string;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'kr',
    name: 'Kanuri',
    nativeName: 'Kanuri',
    flag: '🇳🇬'
  },
  {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'هَوُسَ',
    flag: '🇳🇬'
  }
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
  };

  const t = (key: keyof Translations): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
