import React, { useState, useEffect } from "react";

const ProgressBar = ({
  currentFrame,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const increase = 1;
    const interval = setInterval(() => {
      if (currentFrame === 1) {
        if (progress1 < 100) {
          setProgress1(progress1 + increase);
          setProgress2(0);
          setProgress3(0);
        } else {
          setCurrentFrame(2);
          setProgress1(100);
        }
      } else if (currentFrame === 2) {
        if (progress2 < 100) {
          setProgress2(progress2 + increase);
          setProgress3(0);
        } else {
          setCurrentFrame(3);
          setProgress2(100);
        }
      } else if (currentFrame === 3) {
        if (progress3 < 100) {
          setProgress3(progress3 + increase);
        } else {
          setCurrentFrame(1);
          setProgress1(0);
          setProgress2(100);
          setProgress3(100);
        }
      }
    }, 45);

    return () => clearInterval(interval);
  }, [currentFrame, progress1, progress2, progress3]);

  return (
    <div className="flex flex-col gap-4 h-[350px] justify-evenly">
      <progress
        className="progress custom-progress-bar w-[90px] rotate-90 h-[11px] cursor-pointer"
        value={progress1}
        max="100"
        onClick={() => {
          setCurrentFrame(1);
          setProgress1(0);
          setProgress2(0);
          setProgress3(0);
        }}
      ></progress>
      <progress
        className="progress custom-progress-bar w-[90px] rotate-90 h-[11px] cursor-pointer"
        value={progress2}
        max="100"
        onClick={() => {
          setCurrentFrame(2);
          setProgress1(100);
          setProgress2(0);
          setProgress3(0);
        }}
      ></progress>
      <progress
        className="progress custom-progress-bar w-[90px] rotate-90 h-[11px] cursor-pointer"
        value={progress3}
        max="100"
        onClick={() => {
          setCurrentFrame(3);
          setProgress1(100);
          setProgress2(100);
          setProgress3(0);
        }}
      ></progress>
    </div>
  );
};

export default ProgressBar;
