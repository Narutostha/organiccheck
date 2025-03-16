import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 12,
    minutes: 55,
    seconds: 49,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Timer completed
              clearInterval(timer);
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="text-white font-semibold bg-[#C81414] px-5 py-2 rounded-xl max-sm:w-full max-sm:text-center">
      Ends in | {formatTime(time.hours)} : {formatTime(time.minutes)} :{" "}
      {formatTime(time.seconds)}
    </div>
  );
};

export default CountdownTimer;
