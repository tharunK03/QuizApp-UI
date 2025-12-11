interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}

export default function ProgressBar({ totalQuestions, currentQuestion }: ProgressBarProps) {
  const gapSize = 8;
  const totalGaps = (totalQuestions - 1) * gapSize;
  const segmentWidth = (896 - totalGaps) / totalQuestions;
  
  return (
    <div className="quiz-progress__bar" style={{ gap: `${gapSize}px` }}>
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isFilled = index < currentQuestion;
        return (
          <div
            key={index}
            className="quiz-progress__segment"
            style={{
              width: `${segmentWidth}px`,
              backgroundColor: isFilled ? '#1A2C34' : '#D9E4EC',
            }}
          />
        );
      })}
    </div>
  );
}
