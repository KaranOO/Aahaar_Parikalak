import React, { useState } from 'react';
import './WaterTrack.css';

const WaterTracker = () => {
  const [waterGlasses, setWaterGlasses] = useState(0);

  const increaseWaterIntake = () => {
    setWaterGlasses(prev => prev + 1);
  };

  const decreaseWaterIntake = () => {
    if (waterGlasses > 0) {
      setWaterGlasses(prev => prev - 1);
    }
  };

  return (
    <div className="water-tracker-card">
      <button className="water-btn" onClick={decreaseWaterIntake}>-</button>
      <div className="water-glass">
        <i className="fa fa-glass-water"></i>
        <span>{waterGlasses * 1} Glass</span>
      </div>
      <button className="water-btn" onClick={increaseWaterIntake}>+</button>
    </div>
  );
};

export default WaterTracker;
