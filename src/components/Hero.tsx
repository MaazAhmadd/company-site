import { useState } from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";
import Navbar from "./Navbar";

const Hero = () => {
  const [currentFrame, setCurrentFrame] = useState<number>(1);

  return (
    <>
      <div className="hero-main">
        <Navbar />
        <div className="hidden md:block">
          <HeroImg currentFrame={currentFrame} />
          <HeroContent
            currentFrame={currentFrame}
            setCurrentFrame={setCurrentFrame}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
