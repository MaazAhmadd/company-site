import { useEffect, useState } from "react";

const HeroImg = ({ currentFrame = 1 }: { currentFrame: number }) => {
  const [imgOpacity, setImgOpacity] = useState<Record<string, number>>({
    img1Opacity: 1,
    img2Opacity: 0,
    img3Opacity: 0,
  });
  useEffect(() => {
    if (currentFrame == 1) {
      setImgOpacity({ img1Opacity: 1, img2Opacity: 0, img3Opacity: 0 });
    }
    if (currentFrame == 2) {
      setImgOpacity({ img1Opacity: 0, img2Opacity: 1, img3Opacity: 0 });
    }
    if (currentFrame == 3) {
      setImgOpacity({ img1Opacity: 0, img2Opacity: 0, img3Opacity: 1 });
    }
  }, [currentFrame]);
  return (
    <>
      <div
        style={{
          opacity: imgOpacity.img1Opacity,
          backgroundImage: `url("/1.jpg")`,
        }}
        className="bg-cover bottom-0 left-0 absolute right-0 top-0 -z-10 transition-opacity duration-700"
      ></div>

      <div
        style={{
          opacity: imgOpacity.img2Opacity,
          backgroundImage: `url("/2.jpg")`,
        }}
        className="bg-cover bottom-0 left-0 absolute right-0 top-0 -z-10 transition-opacity duration-700"
      ></div>

      <div
        style={{
          opacity: imgOpacity.img3Opacity,
          backgroundImage: `url("/3.jpg")`,
        }}
        className="bg-cover bottom-0 left-0 absolute right-0 top-0 -z-10 transition-opacity duration-700"
      ></div>
    </>
  );
};

export default HeroImg;
