import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  CheckCircle, 
  XCircle, 
  ArrowLeft,
  Trophy,
  BookOpen,
  Target
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  onBack: () => void;
  onQuizComplete: () => void;
}

const DeviceOperationQuiz: React.FC<QuizProps> = ({ onBack, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const { t } = useLanguage();

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What are the two main pillars of computing?",
      options: [
        "Hardware and Software",
        "Input and Output",
        "Memory and Storage",
        "CPU and RAM"
      ],
      correctAnswer: 0,
      explanation: "Hardware and software are the two main pillars of computing. Hardware refers to the physical components you can touch, while software consists of the programs and instructions that tell the hardware what to do."
    },
    {
      id: 2,
      question: "Which component is often called the 'brain' of the computer?",
      options: [
        "RAM (Random Access Memory)",
        "CPU (Central Processing Unit)",
        "Hard Disk Drive",
        "Motherboard"
      ],
      correctAnswer: 1,
      explanation: "The CPU (Central Processing Unit) is often called the 'brain' of the computer because it processes all the instructions and performs calculations."
    },
    {
      id: 3,
      question: "What type of software manages all other software and hardware on a computer?",
      options: [
        "Application Software",
        "Operating System",
        "Utility Software",
        "Driver Software"
      ],
      correctAnswer: 1,
      explanation: "The Operating System (OS) is the most important software that manages all other software and hardware on the computer, acting as the manager."
    },
    {
      id: 4,
      question: "Which of the following is NOT an input device?",
      options: [
        "Mouse",
        "Keyboard",
        "Monitor",
        "Touchscreen"
      ],
      correctAnswer: 2,
      explanation: "A monitor is an output device that displays information. Mouse, keyboard, and touchscreen are all input devices used to give commands to the computer."
    },
    {
      id: 5,
      question: "What action is performed when you press the left mouse button twice in quick succession?",
      options: [
        "Single Click",
        "Double-click",
        "Right Click",
        "Drag"
      ],
      correctAnswer: 1,
      explanation: "Double-clicking (pressing the left mouse button twice in quick succession) is used to open files or launch programs."
    },
    {
      id: 6,
      question: "Which key is used to create a space between words when typing?",
      options: [
        "Enter Key",
        "Space Bar",
        "Shift Key",
        "Tab Key"
      ],
      correctAnswer: 1,
      explanation: "The Space Bar is used to create spaces between words when typing text."
    },
    {
      id: 7,
      question: "What is the main screen you see when you turn on a computer called?",
      options: [
        "Taskbar",
        "Desktop",
        "Start Menu",
        "Control Panel"
      ],
      correctAnswer: 1,
      explanation: "The desktop is the main screen you see when you turn on a computer, where you find icons and the Start menu."
    },
    {
      id: 8,
      question: "Which operating system is most commonly used on desktop computers and laptops?",
      options: [
        "macOS",
        "Linux",
        "Windows",
        "Android"
      ],
      correctAnswer: 2,
      explanation: "Windows is the most common operating system for desktop computers and laptops, though macOS and Linux are also popular."
    },
    {
      id: 9,
      question: "What is a digital container used to organize and store files called?",
      options: [
        "File",
        "Folder",
        "Document",
        "Program"
      ],
      correctAnswer: 1,
      explanation: "A folder is a digital container used to organize and store files, just like a physical folder on your desk."
    },
    {
      id: 10,
      question: "What is the short code at the end of a filename that tells the computer what type of file it is?",
      options: [
        "File name",
        "File extension",
        "File path",
        "File size"
      ],
      correctAnswer: 1,
      explanation: "A file extension is a short code (usually three or four letters) at the end of a filename that tells the computer what type of file it is and which program should open it."
    },
    {
      id: 11,
      question: "Which of the following is an example of a file extension for a document?",
      options: [
        ".jpg",
        ".mp3",
        ".docx",
        ".mp4"
      ],
      correctAnswer: 2,
      explanation: ".docx is a file extension for Microsoft Word documents. .jpg is for images, .mp3 is for audio, and .mp4 is for video files."
    },
    {
      id: 12,
      question: "What should you do before posting anything online to manage your digital footprint?",
      options: [
        "Ask friends for permission",
        "Think before you post",
        "Use a fake name",
        "Delete it later"
      ],
      correctAnswer: 1,
      explanation: "You should think before you post by asking yourself: 'Would I want my future employer or a family member to see this?' This helps build a positive digital reputation."
    },
    {
      id: 13,
      question: "Which type of storage device is typically faster: HDD or SSD?",
      options: [
        "HDD (Hard Disk Drive)",
        "SSD (Solid State Drive)",
        "They are the same speed",
        "It depends on the brand"
      ],
      correctAnswer: 1,
      explanation: "SSD (Solid State Drive) is typically faster than HDD (Hard Disk Drive) because it has no moving parts and uses flash memory technology."
    },
    {
      id: 14,
      question: "What is the bar usually at the bottom of the screen that shows which programs are currently running?",
      options: [
        "Menu Bar",
        "Toolbar",
        "Taskbar",
        "Scroll Bar"
      ],
      correctAnswer: 2,
      explanation: "The taskbar is a bar, usually at the bottom of the screen, that shows you which programs are currently running and allows you to switch between them."
    },
    {
      id: 15,
      question: "Which key is used to delete the character to the left of the cursor?",
      options: [
        "Delete Key",
        "Backspace Key",
        "Enter Key",
        "Tab Key"
      ],
      correctAnswer: 1,
      explanation: "The Backspace Key is used to delete the character to the left of the cursor, while the Delete Key deletes the character to the right."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions.has(currentQuestion)) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion));
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
        onQuizComplete(); // Notify parent that quiz is completed
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Set());
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const currentQ = questions[currentQuestion];
  const progressPercentage = (currentQuestion / questions.length) * 100;
  const finalScorePercentage = (score / questions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backToCourse')}
          </Button>
        </div>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4">
              {finalScorePercentage >= 80 ? (
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto" />
              ) : (
                <BookOpen className="h-16 w-16 text-green-500 mx-auto" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {t('quizCompleted')}
            </CardTitle>
            <p className="text-gray-600">
              {finalScorePercentage >= 80 
                ? "Congratulations! You've demonstrated excellent understanding of Device Operation and Fundamentals."
                : "Good effort! Review the course material and try again to improve your score."
              }
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {score}/{questions.length}
              </div>
              <div className="text-lg text-gray-700 mb-4">
                {finalScorePercentage.toFixed(1)}% {t('yourScore')}
              </div>
              <Progress value={finalScorePercentage} className="h-3 mb-4" />
              <div className="space-y-2">
                {finalScorePercentage >= 90 && (
                  <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
                    🏆 Excellent! Outstanding Performance
                  </Badge>
                )}
                {finalScorePercentage >= 80 && finalScorePercentage < 90 && (
                  <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                    🎯 Great Job! Strong Understanding
                  </Badge>
                )}
                {finalScorePercentage >= 70 && finalScorePercentage < 80 && (
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                    👍 Good Work! Solid Foundation
                  </Badge>
                )}
                {finalScorePercentage < 70 && (
                  <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
                    📚 Keep Learning! Review and Practice
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleRetakeQuiz}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
              >
                {t('submitQuiz')}
              </Button>
              <Button 
                onClick={onBack}
                variant="outline"
                className="px-6 py-3"
              >
                {t('backToCourse')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t('backToCourse')}
        </Button>
      </div>

      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {t('quizTitle')}
              </CardTitle>
              <p className="text-gray-600">
                {t('question')} {currentQuestion + 1} {t('of')} {questions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {score}
              </div>
              <div className="text-sm text-gray-600">{t('correctAnswers')}</div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQ.question}
              </h2>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answeredQuestions.has(currentQuestion)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  } ${
                    answeredQuestions.has(currentQuestion) && index === currentQ.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : ''
                  } ${
                    answeredQuestions.has(currentQuestion) && selectedAnswer === index && index !== currentQ.correctAnswer
                      ? 'border-red-500 bg-red-50'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        selectedAnswer === currentQ.correctAnswer ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Result Display */}
            {showResult && (
              <div className={`p-4 rounded-lg border-2 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${
                    selectedAnswer === currentQ.correctAnswer ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className="text-gray-700">{currentQ.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <div className="text-sm text-gray-600">
                {answeredQuestions.has(currentQuestion) ? (
                  <span className="text-green-600">✓ Answered</span>
                ) : (
                  <span>Select an answer to continue</span>
                )}
              </div>
              
              {!answeredQuestions.has(currentQuestion) ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {t('submitQuiz')}
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {currentQuestion < questions.length - 1 ? t('next') : t('submitQuiz')}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceOperationQuiz;
