import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import AnswerOption from '../components/AnswerOption';
import NavigationButtons from '../components/NavigationButtons';
import bestofluckImg from '../assets/bestofluck.png';
import catpalmGif from '../assets/catpalm.gif';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];

  const handleAnswerSelect = (answerIndex: number) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsTransitioning(false);
      }, 200);
    } else {
      // Calculate score and navigate to result
      const correctCount = questions.reduce((count, q) => {
        return userAnswers[q.id] === q.correctAnswer ? count + 1 : count;
      }, 0);
      const score = (correctCount / questions.length) * 100;
      navigate('/result', { state: { score, userAnswers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-frame">
        <div className="quiz-inner">
          <h1 className="quiz-title">
          Test Your Knowledge
        </h1>

          <p className="quiz-subtitle">Answer all questions to see your results</p>

          <div className="quiz-progress">
            <ProgressBar
              totalQuestions={questions.length}
              currentQuestion={currentQuestionIndex + 1}
            />
          </div>

          <div
            className={`quiz-content transition-all duration-200 ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <QuestionCard
              questionNumber={currentQuestionIndex + 1}
              question={currentQuestion.question}
            />

            <div className="quiz-options">
              {currentQuestion.options.map((option, index) => (
                <AnswerOption
                  key={index}
                  option={option}
                  index={index}
                  isSelected={selectedAnswer === index}
                  onClick={() => handleAnswerSelect(index)}
                />
              ))}
            </div>
            <div className="quiz-nav">
              <NavigationButtons
                onPrevious={handlePrevious}
                onNext={handleNext}
                currentQuestion={currentQuestionIndex}
                totalQuestions={questions.length}
                hasAnswer={selectedAnswer !== undefined}
              />
            </div>
          </div>
          {currentQuestionIndex === 0 && (
            <div className="quiz-paw hidden md:block">
              <div className="relative">
                <img
                  src={bestofluckImg}
                  alt="Best of Luck"
                  className="quiz-badge"
                />
                <img
                  src={catpalmGif}
                  alt="Cat paw"
                  className="quiz-paw-image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
