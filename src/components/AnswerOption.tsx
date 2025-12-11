interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function AnswerOption({ option, isSelected, onClick }: AnswerOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`quiz-option ${isSelected ? 'selected' : ''}`}
    >
      <span className="quiz-option__text">{option}</span>
    </button>
  );
}
