import React, { useState } from "react";
import { MdArticle } from "react-icons/md";

import { FaTools } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

import AllSkill from "../all-skill";
import AddProject from "../add-project";
import AllProject from "../all-project/page";
import { FaBloggerB } from "react-icons/fa";
import AddBlog from "../add-blog";
import AllBlog from "../all-blog";

import AddArticle from "../add-article";
import AllArticle from "../all-article";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState("dashboard"); // Default to dashboard content

  const handleNavItemClick = (content) => {
    setActiveContent(content);
  };
  return (
    <section>
      <div className="flex h-screen bg-gray-100">
        <div className="flex-col hidden w-64 bg-gray-800 md:flex ">
          {/* dashboard route */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav
              className="flex flex-col flex-1 gap-6 px-2 py-4 overflow-y-auto bg-gradient-to-r from-[#231427] via-[#1d1120] to-[#010b1c]
 rounded-2xl"
            >
              <div>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-white text-[20px] hover:bg-gray-700"
                >
                  Welcome in Dashboard
                </a>
                <hr></hr>
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <a
                  className="flex items-center gap-4 px-4 py-2 mt-2 text-[20px] text-white hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("all-skill")}
                >
                  <TbTools />
                  All-Skill
                </a>
                {/* <a
                  className="flex items-center gap-4 px-4 py-2 mt-2 text-[20px] text-white  hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("add-skill")}
                >
                  <FaTools />
                  Add-Skill
                </a> */}
                <a
                  className="flex items-center px-4 py-2 mt-2  text-[22px] text-white gap-4  hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("all-blog")}
                >
                  <FaBloggerB />
                  All-blog
                </a>
                <a
                  className="flex items-center px-4 py-2 mt-2  text-[22px] text-white gap-4 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("add-blog")}
                >
                  <FaPen />
                  Add-blog
                </a>
                <a
                  className="flex items-center px-4 py-2 mt-2  text-[22px] text-white gap-4 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("all-project")}
                >
                  <MdArticle />
                  All-Project
                </a>

                <a
                  className="flex items-center px-4 py-2 mt-2  text-[20px] text-white gap-4 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("add-project")}
                >
                  <FaNetworkWired />
                  Add-project
                </a>

                <a
                  className="flex items-center px-4 py-2 mt-2  text-[20px] text-white gap-4 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  onClick={() => handleNavItemClick("add-article")}
                >
                  <FaNetworkWired />
                  Add-Article
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* dashboard content */}

        <div
          className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-r from-[#231427] via-[#1d1120] to-[#010b1c]
"
        >
          <div className="">
            <div className="px-4 ">
              <div className="relative ">
                {/* {activeContent === "add-skill" && <AddSkill />}{" "} */}
                {activeContent === "all-skill" && <AllSkill />}{" "}
                {activeContent === "add-project" && <AddProject />}{" "}
                {activeContent === "all-project" && <AllProject />}{" "}
                {activeContent === "add-blog" && <AddBlog />}{" "}
                {activeContent === "all-blog" && <AllBlog />}{" "}
                {activeContent === "add-article" && <AddArticle />}{" "}
                {/* Render ArticleContent here when activeContent is 'article' */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
