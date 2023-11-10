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
        className="grid  grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center py-14 md:py-16 lg:py-[6rem] mt-28 lg:mt-2"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500"
        
      >
        <div className="grid gap-4 text-center text-white md:text-start">
          <h1 className="text-5xl font-bold font-primary text-type text-color" >
            Hi ,I am <span className="text-[#DB2955]">Niaz Abir</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white font-primary">
            A Front-End Developer
          </h2>
          <p className="max-w-md mx-auto text-lg text-gray-500 md:mx-0">
            A curious learner and an analytical minded developer.Try to make
            great website.Coding is fascination and Try to be dedicate and learn
            latest Tools and Technology.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="#project"
              className="text-lg text-white border-[#DB2955] rounded-none btn btn-outline hover:bg-[#DB2955] hover:text-black hover:transition-all hover:duration-1000 "
            >
              Project
            </Link>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1KraBKoNwWBjUW_m1h5cezeNlUZEqBM9g/view?usp=sharing"
              }
              className="text-lg text-black rounded-none border-[#DB2955] btn bg-[#DB2955] hover:bg-transparent hover:border-[#DB2955] hover:transition-all hover:duration-1000 hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
        <Image
          className="rounded-full shadow-xl bg-[#040904]"
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
