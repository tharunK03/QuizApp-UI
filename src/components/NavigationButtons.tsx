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
    <div className="navigation-frame">
      {isLastQuestion ? (
        <button
          onClick={onNext}
          disabled={!hasAnswer}
          className={`nav-btn nav-btn--submit ${!hasAnswer ? 'nav-btn--disabled' : ''}`}
          aria-label="Submit quiz"
        >
          Submit
        </button>
      ) : (
        <>
          {isFirstQuestion ? (
            <button
              disabled
              className="nav-btn nav-btn--disabled"
              aria-label="Previous question"
            >
              <svg
                className="nav-icon"
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
              className="nav-btn nav-btn--back"
              aria-label="Previous question"
            >
              <svg
                className="nav-icon"
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

          <button
            onClick={onNext}
            disabled={!hasAnswer}
            className={`nav-btn nav-btn--next ${!hasAnswer ? 'nav-btn--disabled' : ''}`}
            aria-label="Next question"
          >
            <svg
              className="nav-icon"
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
        </>
      )}
    </div>
  );
}
