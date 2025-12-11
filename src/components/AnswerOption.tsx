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
      className="text-left flex items-center rounded-xl transition-all duration-200 w-full"
      style={{
        width: '897px',
        height: '78px',
        maxWidth: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: isSelected ? '#E6F5FF' : '#FFFFFF',
        border: '0.82px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        marginBottom: '14px', // Proper spacing between options
      }}
    >
      <span 
        className="font-medium m-0"
        style={{ 
          color: '#15313D',
          fontSize: '16px',
        }}
      >
        {option}
      </span>
    </button>
  );
}

