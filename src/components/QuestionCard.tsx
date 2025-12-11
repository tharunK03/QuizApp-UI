interface QuestionCardProps {
  questionNumber: number;
  question: string;
}

export default function QuestionCard({ questionNumber, question }: QuestionCardProps) {
  return (
    <div className="quiz-question">
      <p className="quiz-question__text">
        {questionNumber}. {question}
      </p>
    </div>
  );
}
