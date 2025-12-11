import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="result-score">{Math.round(score)}%</div>
        <button className="result-button" onClick={handleStartAgain}>
          Start Again
        </button>
      </div>
    </div>
  );
}
