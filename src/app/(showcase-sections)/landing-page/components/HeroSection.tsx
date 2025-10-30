"use client";

import { Button, Link } from "@heroui/react";
import Image from "next/image";

const HeroSection = () => {
  console.log("HeroSection rendered");
  return (
    <div className="h-screen w-full relative flex items-center ">
      <Image
        src="/images/landing-splash.jpg"
        alt="Hero Image"
        fill={true}
        className="object-cover brightness-50"
      ></Image>
      {/* Shadow overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/95 to-100%"></div>
      <div className="absolute flex-col z-10">
        <p className=" text-white font-bold text-6xl px-64 text-center">
          {" "}
          Start your journey to find the perfect place to call her home{" "}
        </p>
        <div className="flex items-center flex-col py-20">
          <h1 className="text-neutral-400 text-4xl text-center mx-64 my-6">
            Explore our wide range of properties tailored to fit your lifestyle
            and needs
          </h1>
          <div className="flex gap-12 items-center justify-center py-10">
            <Link href="know-more">
              <Button className="text-white rounded-4xl px-10 py-4 hover:cursor-pointer border-2 border-neutral-700 text-xl">
                Learn more
              </Button>
            </Link>
            <Link href="search">
              <Button className="text-white bg-neutral-700 px-10 py-4 rounded-4xl hover:cursor-pointer hover:bg-none border-2 border-neutral-700 text-xl">
                Search places
              </Button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default HeroSection;
