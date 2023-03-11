import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center py-14 md:py-16 lg:py-[6rem] mt-28 lg:mt-2"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500"
      >
        <div className="grid gap-4 text-white text-center md:text-start">
          <h1 className="text-5xl font-bold text-type text-color">
            Hi ,I am <span className="text-accent-400">Niaz Abir</span>
          </h1>
          <h2 className="text-2xl text-white font-semibold">
            A Front-End Developer
          </h2>
          <p className="text-lg mx-auto md:mx-0 text-gray-500 max-w-md">
            A curious learner and an analytical minded developer.Try to make
            great website.Coding is fascination and Try to be dedicate and learn
            latest Tools and Technology.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="#project"
              className="btn btn-outline rounded-none text-lg text-white hover:bg-accent-400 hover:text-black hover:transition-all hover:duration-1000 border-green-500  "
            >
              Project
            </Link>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/12Lupyg1lFKNglJUEydeYeP3MS_BG-sBX/view?usp=share_link"
              }
              className="btn bg-accent-400 rounded-none text-lg text-black hover:bg-transparent hover:border-green-500 hover:transition-all hover:duration-1000 hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
        <Image
          className="bg-dark-300 rounded-full shadow-xl"
          src="/prope1.png"
          alt=""
          width="400"
          height="200"
        ></Image>
      </div>
    </>
  );
};

export default About;
