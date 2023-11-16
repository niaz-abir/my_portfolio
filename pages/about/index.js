import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
  // useEffect(() => {
  //     AOS.init({
  //       delay: 400,
  //       duration: 800,
  //     });
  //   });
  return (
    <>
      <div className="w-full pl-4 pr-4 mx-auto lg:w-2/3">
        <div className="mt-24 mb-20 ml-4 ">
          <div className="gap-4 text-center text-white md:text-start">
            <h1 className="text-5xl font-bold text-type text-color font-primary">
              Hi ,I am <span className="text-accent-400">Niaz Abir</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white">
              A Front-End Developer
            </h2>
            <p className="mt-4 text-lg text-white md:mx-0 font-primary">
              A passionate and detail-oriented front-end developer with a keen
              eye for creating visually appealing and user-friendly websites.
              With a strong foundation in JavaScript, React js, and Next js, I
              strive to transform innovative ideas into seamless and responsive
              digital experiences. My journey in web development began with a
              genuine curiosity for crafting engaging interfaces. Over the
              years, Ive honed my skills in UI/UX design, ensuring that every
              project I undertake not only meets but exceeds user expectations.
              I am dedicated to staying abreast of the latest industry trends
              and technologies to deliver cutting-edge solutions. Collaboration
              is at the core of my work ethic, and I thrive in team environments
              where creativity and problem-solving converge. I believe effective
              communication is key to successful projects, and I am always eager
              to share my insights while learning from others in the process.
              Having worked on diverse projects, from e-commerce platforms to
              dynamic web applications, I have developed a knack for translating
              complex concepts into elegant, functional designs. I am proficient
              in using modern frameworks such as React and Vue.js, constantly
              pushing the boundaries to create seamless, interactive user
              experiences. Beyond coding, I am a continuous learner, always
              seeking new challenges to broaden my skill set. Whether its
              experimenting with emerging technologies or refining my design
              sensibilities, I am committed to staying at the forefront of the
              ever-evolving landscape of web development. In addition to my
              technical skills, I bring a strong commitment to deadlines,
              attention to detail, and a passion for delivering high-quality
              work. I look forward to contributing my expertise to projects that
              not only meet but exceed client expectations, bringing a fresh
              perspective and creative solutions to the table.
            </p>
            <div className="flex justify-center gap-4 mt-4 lg:justify-start">
              <Link
                href="#project"
                className="text-lg text-white rounded-none border-accent-400 btn btn-outline hover:bg-accent-400 hover:text-black hover:transition-all hover:duration-1000 "
              >
                Project
              </Link>
              <Link
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1KraBKoNwWBjUW_m1h5cezeNlUZEqBM9g/view?usp=sharing"
                }
                className="text-lg text-black rounded-none btn bg-accent-400 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white"
              >
                Resume
              </Link>
            </div>
            <div className="flex justify-center mt-4 lg:justify-start ">
              <Link href="/">
                <button className="text-lg text-white border-none rounded-none btn bg-[#010b1c] hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white">
                  Move Home
                </button>
              </Link>
            </div>
          </div>
          {/* <Image
          className="rounded-md "
          src="/profile7.png"
          alt=""
          width="500"
          height="200"
        ></Image> */}
        </div>
      </div>
    </>
  );
};

export default About;
