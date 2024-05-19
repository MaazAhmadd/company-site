import React, { useEffect, useState } from "react";
import ProgressBar from "./HeroProgress";

const HeroContent = ({
  currentFrame = 1,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [contentOpacity, setContentOpacity] = useState<Record<string, number>>({
    content1Opacity: 1,
    content2Opacity: 0,
    content3Opacity: 0,
  });
  useEffect(() => {
    if (currentFrame == 1) {
      setContentOpacity({
        content1Opacity: 1,
        content2Opacity: 0,
        content3Opacity: 0,
      });
    }
    if (currentFrame == 2) {
      setContentOpacity({
        content1Opacity: 0,
        content2Opacity: 1,
        content3Opacity: 0,
      });
    }
    if (currentFrame == 3) {
      setContentOpacity({
        content1Opacity: 0,
        content2Opacity: 0,
        content3Opacity: 1,
      });
    }
  }, [currentFrame]);
  return (
    <div className="px-8 max-w-[1244px] mx-auto">
      <div className="pt-[64px] pb-[200px] relative flex">
        <ProgressBar
          currentFrame={currentFrame}
          setCurrentFrame={setCurrentFrame}
        />

        <div
          style={{
            opacity: contentOpacity.content1Opacity,
          }}
          className="absolute left-16 transition-opacity duration-700 mt-10 ml-4"
        >
          <div className="text-white text-6xl font-bold mb-6 max-w-[480px]">
            Keep your car feeling fresh
          </div>
          <button className="btn btn-error bg-red-600 hover:bg-red-700 text-white">Auto detailing</button>
        </div>
        <div
          style={{
            opacity: contentOpacity.content2Opacity,
          }}
          className="absolute left-16 transition-opacity duration-700 mt-10 ml-4"
        >
          <div className="text-white text-6xl font-bold mb-6 max-w-[480px]">
            Show off your lawn this spring
          </div>
          <button className="btn btn-error bg-red-600 hover:bg-red-700 text-white">Landscapper</button>
        </div>
        <div
          style={{
            opacity: contentOpacity.content3Opacity,
          }}
          className="absolute left-16 transition-opacity duration-700 mt-10 ml-4"
        >
          <div className="text-white text-6xl font-bold mb-6 max-w-[480px]">
            Feel the breeze
          </div>
          <button className="btn btn-error bg-red-600 hover:bg-red-700 text-white">HVAC</button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
