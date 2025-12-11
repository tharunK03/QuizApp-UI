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
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Background with 4-stop gradient and 200px blur */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #BECFEE 0%, #71C6E2 33.33%, #D9F4FA 66.66%, #BECFEE 100%)',
          filter: 'blur(200px)',
          width: '120%',
          height: '120%',
          margin: '-10%',
        }}
      />
      
      {/* Main Card Container - Exact Figma Specs: 1542px × 856px, responsive scaling */}
      <div 
        className="rounded-[42px] shadow-card relative overflow-visible mx-auto"
        style={{
          width: '1542px',
          height: '856px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          aspectRatio: '1542 / 856',
          backgroundColor: '#F4FDFF',
          border: '1px solid #1F75FE',
          borderRadius: '42px',
          transform: 'scale(min(1, 90vw / 1542, 90vh / 856))',
          transformOrigin: 'center',
        }}
      >
        {/* Header - Exact CSS Specs */}
        <h1 
          className="font-serif italic font-normal flex items-center text-center"
          style={{
            position: 'absolute',
            width: '919px',
            height: '102px',
            left: 'calc(50% - 919px / 2 + 0.5px)',
            top: '206px',
            fontFamily: 'DM Serif Display',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '90px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-4px',
            background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maxWidth: '100%',
          }}
        >
          Test Your Knowledge
        </h1>
        
        {/* Subtitle Badge - Exact Figma Specs: 422×45px, 8px radius, 10px vertical, 31px horizontal */}
        <div 
          className="rounded-lg flex items-center justify-center mx-auto"
          style={{
            width: '422px',
            height: '45px',
            backgroundColor: '#FFFFFF',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '31px',
            paddingRight: '31px',
            borderRadius: '8px',
            marginBottom: '23px', // Spacing to progress bar
            maxWidth: '100%',
          }}
        >
          <p 
            className="text-center whitespace-nowrap m-0" 
            style={{ color: '#15313D', fontSize: '14px' }}
          >
            Answer all questions to see your results
          </p>
        </div>

        {/* Progress Bar Container - Centered, 896px width */}
        <div 
          className="flex justify-center"
          style={{
            width: '100%',
            marginBottom: '38px', // Spacing to question card
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <ProgressBar
            totalQuestions={questions.length}
            currentQuestion={currentQuestionIndex + 1}
          />
        </div>

        {/* Question Card Container - Centered, 896px width */}
        <div
          className={`transition-all duration-200 flex flex-col items-center ${
            isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`}
          style={{
            width: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <div style={{ width: '896px', maxWidth: '100%' }}>
            <QuestionCard
              questionNumber={currentQuestionIndex + 1}
              question={currentQuestion.question}
            />

            {/* Answer Options Container - 897px width, proper spacing */}
            <div 
              style={{
                width: '897px',
                maxWidth: '100%',
                marginTop: '14px', // Spacing between question and answers
              }}
            >
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
          </div>
        </div>

        {/* Navigation Buttons Container - Bottom Right */}
        <div 
          className="absolute"
          style={{
            bottom: '50px',
            right: '50px',
          }}
        >
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            currentQuestion={currentQuestionIndex}
            totalQuestions={questions.length}
            hasAnswer={selectedAnswer !== undefined}
          />
        </div>

        {/* Cat Paw with Best of Luck Image - Bottom Left Corner */}
        <div 
          className="absolute hidden md:block"
          style={{
            left: '94px',
            top: '613px', // 725px - 112px (card top offset) = 613px
            zIndex: 1,
          }}
        >
          <div className="relative">
            {/* Best of Luck Image - Above Paw */}
            <div 
              className="absolute"
              style={{
                left: '50px',
                bottom: '180px',
                zIndex: 10,
              }}
            >
              <img 
                src={bestofluckImg} 
                alt="Best of Luck" 
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '200px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            
            {/* Cat Paw Image - Right side up, no rotation */}
            <div 
              className="relative"
              style={{
                width: '173.45px',
                height: '173.45px',
                zIndex: 2,
              }}
            >
              <img 
                src={catpalmGif} 
                alt="Cat paw" 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  imageRendering: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

