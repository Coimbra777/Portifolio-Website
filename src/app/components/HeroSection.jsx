import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Olá, eu sou Gabriel
          </h1>
          <p className="text-[#ADB7BE] mb-4 text-4xl text:xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-5">
        <div className="rounded-full relative">
          <Image
            src="/images/imageHero.jpg"
            alt="hero-image"
            className="absolute transform"
            width={300}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
