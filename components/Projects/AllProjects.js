import Link from "next/link";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

const AllProjects = ({ projects }) => {
  return (
    <section className="mb-14" id="project">
      <h1 className="mb-4 text-4xl font-bold text-center font-primary text-accent-400 ">
        My Project
      </h1>
      <div className="flex justify-center mb-10">
        <hr className="w-24 "></hr>
      </div>
      <div
        className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 justify-items-center "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        {projects?.map((project) => (
          <div key={project?.id}>
            <div className="card w-[410px] lg:w-[450px] bg-[#2c1831] rounded-none p-6 h-[450px] lg:h-[430px] shadow-xl">
              <Image
                src={`/images/projects/${project?.image}`}
                alt=""
                height="800"
                width="500"
              ></Image>
              <div className="mt-4 text-white">
                <h1 className="mt-4 mb-2 text-xl">{project?.project_name}</h1>
                <div className="flex flex-row flex-wrap gap-2 ">
                  {project?.tools?.map((tool, i) => (
                    <p className="p-2 bg-[#381d3f] " key={i}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between mt-7">
                  <div className="flex flex-row mt-2">
                    <Link href={project.live_link} target="_blank">
                      <AiFillPlayCircle className="text-3xl mr-2 mt-1 liveSite text-[#8EA7E9] "></AiFillPlayCircle>
                    </Link>
                    <Link
                      href={project.github_client}
                      target="_blank"
                      className="flex items-center"
                    >
                      <div className="group">
                        <AiFillGithub className="text-3xl mr-2 text-[#FF8DC7]"></AiFillGithub>
                        <span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">
                          Client-repo
                        </span>
                      </div>
                    </Link>

                    <Link
                      href={project.github_server}
                      target="_blank"
                      className="flex items-center"
                    >
                      <div className="group">
                        <FaGithubAlt className="text-3xl text-[#57A773]"></FaGithubAlt>
                        <span className="absolute px-2 py-1 ml-2 text-xs font-bold transition-opacity transform -translate-x-1/2 rounded-md opacity-0 text-accent-400 group-hover:opacity-100">
                          Server-repo
                        </span>
                      </div>
                    </Link>
                  </div>
                  <Link
                    href={`/projectDetails/${project?.id}`}
                    className={` btn rounded-[3px] out border-accent-400 bg-accent-400 hover:text-black font-semibold`}
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

export default AllProjects;
