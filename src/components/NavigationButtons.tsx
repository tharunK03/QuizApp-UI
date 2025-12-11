interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentQuestion: number;
  totalQuestions: number;
  hasAnswer: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  currentQuestion,
  totalQuestions,
  hasAnswer,
}: NavigationButtonsProps) {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="flex justify-end gap-3">
      {isFirstQuestion ? (
        <button
          disabled
          className="rounded-lg opacity-50 cursor-not-allowed flex items-center justify-center shadow-sm"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#E6F5FF',
            borderRadius: '8px',
          }}
          aria-label="Previous question"
        >
          <svg
            className="text-gray-400"
            style={{ width: '24px', height: '24px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={onPrevious}
          className="rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#E6F5FF',
            borderRadius: '8px',
          }}
          aria-label="Previous question"
        >
          <svg
            className="text-gray-700"
            style={{ width: '24px', height: '24px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      
      {isLastQuestion ? (
        <button
          onClick={onNext}
          disabled={!hasAnswer}
          className={`rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm font-semibold ${
            hasAnswer
              ? 'bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 hover:scale-105 text-deep-teal'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          style={{
            paddingLeft: 'clamp(20px, 2.1vw, 32px)',
            paddingRight: 'clamp(20px, 2.1vw, 32px)',
            paddingTop: 'clamp(10px, 1.2vh, 12px)',
            paddingBottom: 'clamp(10px, 1.2vh, 12px)',
            fontSize: 'clamp(14px, 1vw, 16px)',
          }}
          aria-label="Submit quiz"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!hasAnswer}
          className={`rounded-lg flex items-center justify-center transition-all duration-200 shadow-sm ${
            !hasAnswer ? 'cursor-not-allowed opacity-50' : 'hover:scale-105'
          }`}
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#E6F5FF',
            borderRadius: '8px',
            color: hasAnswer ? '#15313D' : '#9CA3AF',
          }}
          aria-label="Next question"
        >
          <svg
            style={{ width: '24px', height: '24px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

