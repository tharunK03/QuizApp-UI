# Quiz Application

A beautiful, pixel-perfect quiz application built with React, TypeScript, and TailwindCSS.

## Features

- ✨ Modern, clean UI with soft blue gradients
- 📊 Multi-step progress bar
- 🎯 Multiple choice questions with interactive answer selection
- ➡️ Previous/Next navigation between questions
- 📈 Score calculation and result screen
- 🔄 Restart quiz functionality
- 🎨 Smooth animations and transitions
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  components/
    ProgressBar.tsx      # Progress indicator component
    QuestionCard.tsx     # Question display component
    AnswerOption.tsx     # Individual answer option component
    NavigationButtons.tsx # Previous/Next navigation
  pages/
    Quiz.tsx            # Main quiz page
    Result.tsx          # Results page
  data/
    questions.ts        # Quiz questions data
  App.tsx              # Main app component with routing
  main.tsx             # Entry point
```

## Customization

### Adding Questions

Edit `src/data/questions.ts` to add or modify quiz questions:

```typescript
{
  id: 6,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3"],
  correctAnswer: 1, // Index of correct answer (0-based)
}
```

### Styling

All styles use TailwindCSS. Custom colors and fonts are defined in `tailwind.config.js`.

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## License

MIT

