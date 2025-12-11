import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };
  const [isVisible, setIsVisible] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let rafId: number;
    const start = performance.now();
    const duration = 1200;
    const target = Math.round(score);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayScore(Math.round(target * eased));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [score]);

  const handleStartAgain = () => {
    navigate('/');
  };

  return (
    <div className="result-page">
      <div
        className={`result-frame ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } transition-all duration-500`}
      >
        <div className="result-pill">Keep Learning!</div>
        <h1 className="result-title">Your Final score is</h1>
        <div className="result-score-wrap">
          <div className="result-score">{displayScore}</div>
          <span className="result-percent">%</span>
        </div>
        <button className="result-button" onClick={handleStartAgain}>
          Start Again
        </button>
      </div>
    </div>
  );
}
