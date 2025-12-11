interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}

export default function ProgressBar({ totalQuestions, currentQuestion }: ProgressBarProps) {
  // Calculate segment width: (896px - gaps) / totalQuestions
  const gapSize = 8; // Gap between segments
  const totalGaps = (totalQuestions - 1) * gapSize;
  const segmentWidth = (896 - totalGaps) / totalQuestions;
  
  return (
    <div 
      className="flex"
      style={{ 
        width: '896px',
        maxWidth: '100%',
        height: '6px',
        gap: `${gapSize}px`,
      }}
    >
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isFilled = index < currentQuestion;
        return (
          <div
            key={index}
            className="rounded-full transition-all duration-300"
            style={{
              width: `${segmentWidth}px`,
              height: '6px',
              backgroundColor: isFilled ? '#1A2C34' : '#D9E4EC',
            }}
          />
        );
      })}
    </div>
  );
}

