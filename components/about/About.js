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
            <div>
              <Link href="#project">
                <button className="btn hover:bg-[#DB2955] bg-transparent border-2 border-[#DB2955] text-[18px] h-14 w-36">
                  project
                </button>
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1KraBKoNwWBjUW_m1h5cezeNlUZEqBM9g/view?usp=sharing"
                }
              >
                <button className="btn bg-[#DB2955] hover:bg-transparent border-2 border-[#DB2955] text-[18px] h-14 w-36">
                  Resume
                </button>
              </Link>
            </div>
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
