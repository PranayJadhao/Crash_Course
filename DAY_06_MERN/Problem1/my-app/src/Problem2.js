import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <div>Seconds: {seconds}</div>;
};

export default Timer;
