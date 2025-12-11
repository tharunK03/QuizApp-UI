export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Pacific"],
    correctAnswer: 2,
  },
];

