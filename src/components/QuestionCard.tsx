interface QuestionCardProps {
  questionNumber: number;
  question: string;
}

export default function QuestionCard({ questionNumber, question }: QuestionCardProps) {
  return (
    <div 
      className="rounded-xl flex items-center px-6"
      style={{
        width: '896px',
        height: '78px',
        maxWidth: '100%',
        background: 'linear-gradient(180deg, #D9F4FA 0%, #71C6E2 100%)',
        borderRadius: '12px',
      }}
    >
      <p 
        className="text-gray-800 font-medium m-0"
        style={{ fontSize: '18px' }}
      >
        {questionNumber}. {question}
      </p>
    </div>
  );
}

