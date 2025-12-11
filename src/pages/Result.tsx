import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { questions } from '../data/questions';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, userAnswers } = location.state || { score: 0, userAnswers: {} };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartAgain = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center justify-center p-4">
      <div
        className={`w-full max-w-4xl bg-white rounded-[42px] shadow-card p-8 md:p-12 text-center transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif italic text-deep-teal mb-6 tracking-tight">
          Your Final Score is
        </h1>

        {/* Score Display */}
        <div className="mb-12">
          <div className="text-8xl md:text-9xl font-bold text-deep-teal mb-4">
            {Math.round(score)}%
          </div>
          <div className="text-xl text-gray-600">
            You answered {Object.keys(userAnswers).length} out of {questions.length} questions correctly
          </div>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic text-deep-teal mb-4">
            Keep Learning!
          </h2>
          <p className="text-gray-600 text-lg">
            {score >= 80
              ? "Excellent work! You've mastered this topic."
              : score >= 60
              ? "Good job! There's always room for improvement."
              : "Don't give up! Practice makes perfect."}
          </p>
        </div>

        {/* Start Again Button */}
        <button
          onClick={handleStartAgain}
          className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-deep-teal font-semibold px-12 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-md text-lg"
        >
          Start Again
        </button>

        {/* Detailed Results */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-serif italic text-deep-teal mb-6">Review Your Answers</h3>
          <div className="space-y-4 text-left">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div
                  key={question.id}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-gray-800">
                      {index + 1}. {question.question}
                    </p>
                    <span
                      className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
                        isCorrect
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Your answer:</span>{' '}
                      {userAnswer !== undefined
                        ? question.options[userAnswer]
                        : 'Not answered'}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-700">
                        <span className="font-medium">Correct answer:</span>{' '}
                        {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

