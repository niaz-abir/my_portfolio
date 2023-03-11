import Link from "next/link";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import styles from "./AllProject.module.css";

const AllProject = ({ projects }) => {
  return (
    <section className="" id="project">
      <h1 className="text-accent-400 text-center text-4xl font-bold mb-8 ">
        My Project
      </h1>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 items-center "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        {projects?.map((project) => (
          <div key={project?.id}>
            <div className="card w-[410px] lg:w-[450px] bg-dark-400 rounded-none p-4 h-[450px] lg:h-[430px] shadow-xl">
              <Image
                src={`/images/projects/${project?.image}`}
                alt=""
                height="800"
                width="500"
              ></Image>
              <div className="mt-4 text-white">
                <h1 className="text-xl mt-4 mb-2">{project?.project_name}</h1>
                <div className="  flex flex-wrap flex-row gap-2">
                  {project?.tools?.map((tool, i) => (
                    <p className="bg-dark-300 p-2 " key={i}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="flex  mt-7 justify-between">
                  <div className="flex flex-row mt-2">
                    <Link href={project.live_link} target="_blank">
                      <AiFillPlayCircle className="text-3xl mr-2 liveSite text-[#8EA7E9] "></AiFillPlayCircle>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <AiFillGithub className="text-3xl text-[#FF8DC7]"></AiFillGithub>
                    </Link>
                  </div>
                  <Link
                    href={`/projectDetails/${project?.id}`}
                    className={`${styles.btnProject} btn rounded-none out border-accent-400 hover:text-black font-semibold`}
                  >
                    {" "}
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProject;
