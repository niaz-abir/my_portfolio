import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import working17 from "../../public/second.json";

import Lottie from "lottie-react";

const Tolling = () => {
  return (
    <div className="py-6 mb-14">
      <h1 className="mb-4 text-4xl font-bold tracking-widest text-center font-primary text-accent-400 ">
        Tooling
      </h1>
      <div className="flex justify-center mb-10">
        <hr className="w-24"></hr>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white text-xl mx-auto lg:max-w-[60rem]">
        <div className="flex items-center justify-center gap-3 bg-[#2c1831] p-5">
          {" "}
          <DiReact className="text-4xl text-sky-400"></DiReact>
          <h1>React</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <DiJavascript1 className="text-4xl text-yellow-400"></DiJavascript1>
          <h1>Javascript</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <SiVercel className="text-4xl text-black"></SiVercel>
          <h1>Nextjs</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <SiTypescript className="text-4xl text-sky-400"></SiTypescript>
          <h1>Typescript</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <TbBrandTailwind className="text-4xl text-sky-400"></TbBrandTailwind>
          <h1>Tailwind</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          {" "}
          <SiFirebase className="text-4xl text-yellow-400"></SiFirebase>
          <h1>Firebase</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <SiMongodb className="text-4xl text-green-700"></SiMongodb>
          <h1>MongoDB</h1>
        </div>

        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <SiChakraui className="text-4xl text-blue-400 "></SiChakraui>
          <h1>ChakraUI</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <IoLogoSass className="text-4xl text-pink-600"></IoLogoSass>
          <h1>Sass</h1>
        </div>

        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <FaBootstrap className="text-4xl text-purple-600"></FaBootstrap>
          <h1>Bootstrap</h1>
        </div>
      </div>
    </div>
  );
};

export default Tolling;
