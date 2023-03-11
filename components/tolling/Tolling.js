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

const Tolling = () => {
  return (
    <div className="py-14">
      <h1 className="text-center text-4xl font-bold text-accent-400 tracking-widest mb-8 md:mb-10">
        Tooling
      </h1>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white text-xl mx-auto lg:max-w-[60rem]">
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          {" "}
          <DiReact className="text-sky-400 text-4xl"></DiReact>
          <h1>React</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <DiJavascript1 className="text-yellow-400 text-4xl"></DiJavascript1>
          <h1>Javascript</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <SiVercel className="text-black text-4xl"></SiVercel>
          <h1>Nextjs</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <SiTypescript className="text-sky-400 text-4xl"></SiTypescript>
          <h1>Typescript</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <TbBrandTailwind className="text-sky-400 text-4xl"></TbBrandTailwind>
          <h1>Tailwind</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          {" "}
          <SiFirebase className="text-yellow-400 text-4xl"></SiFirebase>
          <h1>Firebase</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <SiMongodb className="text-green-700 text-4xl"></SiMongodb>
          <h1>MongoDB</h1>
        </div>

        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <SiChakraui className=" text-blue-400 text-4xl"></SiChakraui>
          <h1>ChakraUI</h1>
        </div>
        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <IoLogoSass className="text-pink-600 text-4xl"></IoLogoSass>
          <h1>Sass</h1>
        </div>

        <div className="flex items-center justify-center gap-3 bg-dark-300 p-5">
          <FaBootstrap className="text-purple-600 text-4xl"></FaBootstrap>
          <h1>Bootstrap</h1>
        </div>
      </div>
    </div>
  );
};

export default Tolling;
