/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <Header />
        <div className="grid items-center grid-cols-1 gap-10 ml-3 text-white lg:ml-8 md:grid-cols-2 justify-items-center">
          <div>
            <p className="text-white text-[18px]">
              Hi, I'm <span className="font-bold">Niaz Abir</span>, a passionate
              Front-End Developer dedicated to crafting interactive,
              user-friendly, and visually appealing web experiences. With
              expertise in JavaScript, TypeScript, React, Next.js, Redux,
              Tailwind CSS, and Firebase, I specialize in building modern,
              responsive, and high-performance applications. I enjoy
              transforming creative ideas into functional and engaging digital
              solutions, ensuring seamless user interactions with optimized
              performance.
            </p>
            <p className="mt-8 text-[18px]">
              My development approach focuses on clean code, accessibility, and
              scalability, making sure every project I work on meets industry
              standards and best practices. Beyond coding, I’m always eager to
              explore the latest front-end technologies, enhance my skills, and
              contribute to innovative projects. Lets build something amazing
              together!
            </p>
          </div>

          <Image
            className="rounded-md "
            src="/prom6.jpg"
            alt=""
            width="440"
            height="100"
          ></Image>
        </div>
      </section>
    </>
  );
};

export default About;
