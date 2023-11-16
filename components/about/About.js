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
        className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 lg:-mt-24 justify-items-center py-14 mt-36 "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2500"
      >
        <div className="grid gap-4 text-center text-white md:text-start">
          <h1 className="text-5xl font-bold font-primary text-type text-color">
            Hi ,I am <span className="text-[#DB2955]">Niaz Abir</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white font-primary">
            A Front-End Developer
          </h2>
          <p className="max-w-md mx-auto text-lg text-gray-400 md:mx-0">
            A curious learner and an analytical minded developer.Try to make
            great website.Coding is fascination and Try to be dedicate and learn
            latest Tools and Technology.
          </p>
          <div className="flex justify-center gap-4 mt-4 lg:justify-start">
            <Link href="#project">
              <button>
                <div class="b relative mx-auto h-14 w-36 flex justify-center items-center">
                  <div class="i  h-14 w-36 text-lg text-white border-[#DB2955]  btn btn-outline hover:bg-[#DB2955] hover:text-black hover:transition-all hover:duration-1000  items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out rounded-none"></div>
                  <a class="text-center text-lg text-white font-semibold z-10 pointer-events-none">
                    Project
                  </a>
                  <span class="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#010b1c] opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-6 w-6 bg-gradient-to-r from-[#472850] to-[#010b1c] "></span>
                  </span>
                </div>
              </button>
            </Link>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1KraBKoNwWBjUW_m1h5cezeNlUZEqBM9g/view?usp=sharing"
              }
            >
              <button>
                <div class="b relative mx-auto h-14  w-36 flex justify-center items-center">
                  <div class="i  h-14 w-36 text-lg text-white border-[#DB2955]  btn btn-outline bg-[#DB2955] hover:bg-transparent hover:border-[#DB2955]    hover:text-black hover:transition-all hover:duration-1000  items-center  shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out rounded-none"></div>
                  <a class="text-center text-lg text-white font-semibold z-10 pointer-events-none">
                    Resume
                  </a>
                  <span class="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#010b1c] opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-6 w-6 bg-gradient-to-r from-[#472850] to-[#010b1c] "></span>
                  </span>
                </div>
              </button>
            </Link>

            {/* <Link
              href="#project"
              className="text-lg text-white border-[#DB2955] rounded-none btn btn-outline hover:bg-[#DB2955] hover:text-black hover:transition-all hover:duration-1000 "
            >
              Project
            </Link> */}

            {/* <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1KraBKoNwWBjUW_m1h5cezeNlUZEqBM9g/view?usp=sharing"
              }
              className="text-lg text-black rounded-none border-[#DB2955] btn bg-[#DB2955] hover:bg-transparent hover:border-[#DB2955] hover:transition-all hover:duration-1000 hover:text-white"
            >
              Resume
            </Link> */}
          </div>
        </div>
        <Image
          className="rounded-md "
          src="/profile7.png"
          alt=""
          width="500"
          height="200"
        ></Image>
      </div>
    </>
  );
};

export default About;
