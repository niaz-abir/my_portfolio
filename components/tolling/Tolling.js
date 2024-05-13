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
import { SiRedux } from "react-icons/si";
import working17 from "../../public/second.json";
import { FaTools } from "react-icons/fa";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Tolling = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          "https://portfolio-server-black-eight.vercel.app/skill"
        ); // Adjust the URL as per your backend API
        setSkills(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="py-6 mb-14">
      <h1 className="mb-4 text-4xl font-bold tracking-widest text-center font-primary text-accent-400 ">
        Tooling
      </h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {skills?.map((skill) => (
          <div key={skill?._id}>
            <div className="flex items-center justify-center gap-3 bg-[#2c1831] p-5">
              {" "}
              <FaTools className="text-3xl font-bold text-gray-500"></FaTools>
              <h1 className="font-bold text-white">{skill.skill}</h1>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mb-10">
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
          <SiRedux className="text-4xl text-blue-400 "></SiRedux>
          <h1>Redux</h1>
        </div>
        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <IoLogoSass className="text-4xl text-pink-600"></IoLogoSass>
          <h1>Sass</h1>
        </div>

        <div className="flex items-center justify-center gap-3 p-5 bg-[#2c1831]">
          <SiChakraui className="text-4xl text-purple-600"></SiChakraui>
          <h1>ShadcnUi</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Tolling;
