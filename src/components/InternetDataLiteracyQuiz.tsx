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

const InternetDataLiteracyQuiz: React.FC<QuizProps> = ({ onBack, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const { t } = useLanguage();

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What type of internet connection uses radio waves to connect devices?",
      options: [
        "Ethernet",
        "Wi-Fi",
        "Mobile Data",
        "Fiber Optic"
      ],
      correctAnswer: 1,
      explanation: "Wi-Fi uses radio waves to connect devices to the internet through a router, making it a wireless connection type."
    },
    {
      id: 2,
      question: "Which of the following is NOT a type of internet connection?",
      options: [
        "Wi-Fi",
        "Mobile Data",
        "Ethernet",
        "Bluetooth"
      ],
      correctAnswer: 3,
      explanation: "Bluetooth is a short-range wireless technology for connecting devices, not an internet connection type."
    },
    {
      id: 3,
      question: "What does the 'https://' part of a website address indicate?",
      options: [
        "The website is free",
        "The connection is secure",
        "The website is fast",
        "The website is popular"
      ],
      correctAnswer: 1,
      explanation: "The 'https://' indicates that the connection is secure and encrypted, which is important when entering personal information."
    },
    {
      id: 4,
      question: "What is a web browser?",
      options: [
        "A computer virus",
        "An application to access the internet",
        "A type of internet connection",
        "A search engine"
      ],
      correctAnswer: 1,
      explanation: "A web browser is the application you use to access the internet, such as Chrome, Firefox, or Safari."
    },
    {
      id: 5,
      question: "Which search technique helps you find an exact phrase?",
      options: [
        "Using capital letters",
        "Putting quotes around the phrase",
        "Adding more words",
        "Using different languages"
      ],
      correctAnswer: 1,
      explanation: "Putting quotation marks around a phrase tells the search engine to look for that exact phrase."
    },
    {
      id: 6,
      question: "What does the search operator 'site:' do?",
      options: [
        "Searches only on a specific website",
        "Finds images",
        "Limits results to recent content",
        "Excludes certain words"
      ],
      correctAnswer: 0,
      explanation: "The 'site:' operator allows you to search for information only on a specific website."
    },
    {
      id: 7,
      question: "What does the minus sign (-) do in a search?",
      options: [
        "Makes the search more specific",
        "Excludes a word from results",
        "Finds older content",
        "Searches for free content"
      ],
      correctAnswer: 1,
      explanation: "The minus sign (-) excludes a word from your search results."
    },
    {
      id: 8,
      question: "What does the 'S' in the S.A.T. method stand for?",
      options: [
        "Search",
        "Source",
        "Speed",
        "Security"
      ],
      correctAnswer: 1,
      explanation: "The 'S' in S.A.T. stands for 'Source' - who created the content."
    },
    {
      id: 9,
      question: "What does the 'A' in the S.A.T. method stand for?",
      options: [
        "Age",
        "Accuracy",
        "Author",
        "Amount"
      ],
      correctAnswer: 1,
      explanation: "The 'A' in S.A.T. stands for 'Accuracy' - is the information factual and correct."
    },
    {
      id: 10,
      question: "What does the 'T' in the S.A.T. method stand for?",
      options: [
        "Type",
        "Time",
        "Timeliness",
        "Topic"
      ],
      correctAnswer: 2,
      explanation: "The 'T' in S.A.T. stands for 'Timeliness' - when was the information published."
    },
    {
      id: 11,
      question: "Which of the following is a sign of misinformation?",
      options: [
        "Well-researched content",
        "Sensational headlines",
        "Multiple sources cited",
        "Professional writing"
      ],
      correctAnswer: 1,
      explanation: "Sensational headlines designed to get emotional reactions are often a sign of misinformation."
    },
    {
      id: 12,
      question: "What file extension is used for documents that look the same on any device?",
      options: [
        ".jpg",
        ".mp3",
        ".pdf",
        ".mp4"
      ],
      correctAnswer: 2,
      explanation: ".pdf files maintain their formatting and appearance across different devices and platforms."
    },
    {
      id: 13,
      question: "Which file type is typically used for images?",
      options: [
        ".docx",
        ".mp3",
        ".jpg",
        ".mp4"
      ],
      correctAnswer: 2,
      explanation: ".jpg (and .png) are common file extensions for image files."
    },
    {
      id: 14,
      question: "What is the best practice when downloading files?",
      options: [
        "Download from any website",
        "Always download from trusted websites",
        "Download everything you see",
        "Ignore file sizes"
      ],
      correctAnswer: 1,
      explanation: "Always download from trusted websites to avoid viruses and malware."
    },
    {
      id: 15,
      question: "What should you do before believing surprising information online?",
      options: [
        "Share it immediately",
        "Cross-check with trusted sources",
        "Ignore it completely",
        "Believe it if it's popular"
      ],
      correctAnswer: 1,
      explanation: "Always cross-check surprising information with at least two other trusted sources before believing or sharing it."
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
        onQuizComplete();
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
            Back to Course
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
              Quiz Completed!
            </CardTitle>
            <p className="text-gray-600">
              {finalScorePercentage >= 80 
                ? "Congratulations! You've demonstrated excellent understanding of Internet and Data Literacy."
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
                {finalScorePercentage.toFixed(1)}% Score
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
                Retake Quiz
              </Button>
              <Button 
                onClick={onBack}
                variant="outline"
                className="px-6 py-3"
              >
                Back to Course
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
          Back to Course
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
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {score}
              </div>
              <div className="text-sm text-gray-600">Correct</div>
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
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternetDataLiteracyQuiz;
