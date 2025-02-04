'use client'

import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  return (
    <div>
      <h1>Countdown: {seconds} seconds</h1>
    </div>
  );
};

export default Countdown;