"use client";

import Image from "next/image";

import SlideButton from "./SlideButton";

const Hero = () => {
  return (
    <div className="relative top-0 flex flex-col h-95screen w-full justify-center items-center overflow-hidden bg-zinc-600">
      <div className="relative z-20 flex flex-col justify-center items-center space-y-12 ">
        <div className="flex flex-col items-center justify-center space-y-6">
          <span className="text-yellow-500 text-lg">AUTO BEN'S</span>
          <h1 className="italic text-4xl text-white text-center">
            ROULEZ AVEC LA <span className="font-bold">VOITURE</span> DE VOS{" "}
            <span className="font-bold">REVES</span> EN UN CLIC
          </h1>
        </div>
        <SlideButton
          title="Trouve ta voiture maintenant"
          styles="mt-8 text-white border-white hover:bg-yellow-500 hover:border-yellow-500"
          handleClick={() => {}}
        />
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-80"
        src="/videos/hero-car-video.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;