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

const DigitalCommunicationQuiz: React.FC<QuizProps> = ({ onBack, onQuizComplete }) => {
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
      question: "What is the purpose of a subject line in an email?",
      options: [
        "To make the email longer",
        "To tell the recipient what the email is about",
        "To hide the email content",
        "To make the email look professional"
      ],
      correctAnswer: 1,
      explanation: "A clear subject line tells the recipient what the email is about, making it easier for them to understand the purpose and prioritize their responses."
    },
    {
      id: 2,
      question: "What does 'netiquette' refer to?",
      options: [
        "Internet speed",
        "Rules of polite online communication",
        "Network security",
        "Email storage"
      ],
      correctAnswer: 1,
      explanation: "Netiquette refers to the rules of polite online communication, ensuring respectful and considerate digital interactions."
    },
    {
      id: 3,
      question: "Why is typing in ALL CAPS considered rude online?",
      options: [
        "It's harder to read",
        "It's seen as shouting",
        "It uses more data",
        "It's slower to type"
      ],
      correctAnswer: 1,
      explanation: "Typing in ALL CAPS is considered shouting online and is generally seen as rude or aggressive behavior."
    },
    {
      id: 4,
      question: "What should you do when attaching a file to an email?",
      options: [
        "Always attach large files",
        "Make sure the file is relevant and not too large",
        "Attach multiple files at once",
        "Never attach files"
      ],
      correctAnswer: 1,
      explanation: "When attaching files, ensure they are relevant to the email content and not excessively large, as this can cause delivery issues."
    },
    {
      id: 5,
      question: "What does CC stand for in email?",
      options: [
        "Copy and Paste",
        "Carbon Copy",
        "Computer Code",
        "Central Copy"
      ],
      correctAnswer: 1,
      explanation: "CC stands for 'Carbon Copy' and allows you to include additional recipients who should be aware of the email but aren't the primary addressee."
    },
    {
      id: 6,
      question: "What is the main advantage of messaging apps like WhatsApp?",
      options: [
        "They're always free",
        "They allow real-time communication",
        "They never need internet",
        "They're more secure than email"
      ],
      correctAnswer: 1,
      explanation: "Messaging apps like WhatsApp allow real-time communication, making it easy to have instant conversations with others."
    },
    {
      id: 7,
      question: "What should you do when creating a social media profile?",
      options: [
        "Share all personal information",
        "Use limited personal information for security",
        "Use a fake name always",
        "Never include any information"
      ],
      correctAnswer: 1,
      explanation: "When creating social media profiles, use limited personal information for security and privacy reasons."
    },
    {
      id: 8,
      question: "What is a group chat?",
      options: [
        "A private conversation",
        "A conversation with multiple people",
        "A public forum",
        "A one-on-one message"
      ],
      correctAnswer: 1,
      explanation: "A group chat is a conversation that includes multiple people, allowing everyone in the group to participate in the discussion."
    },
    {
      id: 9,
      question: "What is the purpose of privacy settings on social media?",
      options: [
        "To make your account invisible",
        "To control who sees your content",
        "To hide from everyone",
        "To make your account faster"
      ],
      correctAnswer: 1,
      explanation: "Privacy settings allow you to control who can see your content, helping you manage your digital footprint and personal information."
    },
    {
      id: 10,
      question: "What is a shared document?",
      options: [
        "A document only you can edit",
        "A document multiple people can edit together",
        "A document that's always public",
        "A document that can't be changed"
      ],
      correctAnswer: 1,
      explanation: "A shared document allows multiple people to edit the same document at the same time, enabling collaborative work."
    },
    {
      id: 11,
      question: "What is the main benefit of online collaboration tools?",
      options: [
        "They're always free",
        "They allow people to work together from different locations",
        "They're faster than in-person meetings",
        "They never have technical issues"
      ],
      correctAnswer: 1,
      explanation: "Online collaboration tools allow people to work together on projects from different locations, making teamwork more flexible and accessible."
    },
    {
      id: 12,
      question: "What is a digital footprint?",
      options: [
        "A type of password",
        "The trail of data you leave behind online",
        "A digital signature",
        "An online profile picture"
      ],
      correctAnswer: 1,
      explanation: "A digital footprint is the trail of data you leave behind online through your posts, messages, and online activities."
    },
    {
      id: 13,
      question: "What should you ask yourself before posting online?",
      options: [
        "Will this get many likes?",
        "Would I want my future employer to see this?",
        "Is this trending?",
        "Will my friends approve?"
      ],
      correctAnswer: 1,
      explanation: "Before posting online, ask yourself if you'd want your future employer or family members to see the content, as it can affect your digital reputation."
    },
    {
      id: 14,
      question: "What is the best way to build a positive digital reputation?",
      options: [
        "Post frequently",
        "Be a positive contributor and share your skills",
        "Always agree with others",
        "Use many hashtags"
      ],
      correctAnswer: 1,
      explanation: "Building a positive digital reputation involves being a positive contributor, sharing your skills, and supporting your community in a respectful way."
    },
    {
      id: 15,
      question: "Why is it important to log out of accounts on public computers?",
      options: [
        "To save battery",
        "To protect your personal information",
        "To make the computer faster",
        "To free up space"
      ],
      correctAnswer: 1,
      explanation: "Logging out of accounts on public computers protects your personal information from being accessed by others who might use the same computer."
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
                ? "Congratulations! You've demonstrated excellent understanding of Digital Communication and Collaboration."
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

export default DigitalCommunicationQuiz;
