import { getProjects } from "@/utils/getproject";
import Image from "next/image";

const projectDetail = ({ filteredProject }) => {
  console.log(filteredProject);

  return (
    <section className=" w-[25rem] lg:w-[80rem] mx-auto mt-16 mb-32">
      {/* banner image */}
      <h1 className="text-3xl font-bold text-center text-white my-8">
        Details of {filteredProject.project_name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center justify-items-center p-4 lg:p-1 ">
        <div>
          <Image
            src={`/images/projects/${filteredProject?.banner_pic}`}
            alt=""
            height="800"
            width="700"
          ></Image>
        </div>
        <div>
          <p className="text-white text-[15px] lg:text-[20px] p-4 lg:p-1">
            {filteredProject.banner_details}
          </p>
        </div>
      </div>
      {/* key features section  */}

      <div>
        <h1 className="text-3xl font-bold text-center mt-8 mb-8 text-white ">
          Key Feature of this project
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-items-center justify-center mt-14 mb-14 p-4 lg:p-1">
          <div>
            <div className="card w-[400px] lg:w-[500px] rounded-none  p-4 lg:p-1">
              <figure>
                <Image
                  src={`/images/projects/${filteredProject?.key_feautrespicOne}`}
                  alt=""
                  height="800"
                  width="1200"
                />
              </figure>
              <div className="card-body">
                <p className="text-white text-15px lg:text-[18px]">
                  {filteredProject.key_feautresDetailsOne}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-[400px] lg:w-[500px] rounded-none p-4 lg:p-1">
              <figure>
                <Image
                  src={`/images/projects/${filteredProject?.key_feautrespicTwo}`}
                  alt=""
                  height="800"
                  width="700"
                />
              </figure>
              <div className="card-body ">
                <p className="text-white text-15px lg:text-[18px]">
                  {filteredProject.key_feautresDetailsTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screenshort of feature */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center items-center p-4 lg:p-1">
        <div>
          <Image
            src={`/images/projects/${filteredProject?.project_screenshortOne}`}
            alt=""
            height="400"
            width="500"
          ></Image>
        </div>
        <div>
          <Image
            src={`/images/projects/${filteredProject?.project_screenshorttwo}`}
            alt=""
            height="400"
            width="500"
          ></Image>
        </div>
        <div>
          <Image
            src={`/images/projects/${filteredProject?.project_screenshortthree}`}
            alt=""
            height="400"
            width="500"
          ></Image>
        </div>
        <div className="text-white">
          <p className=" text-15px lg:text-[18px] text-white p-4 lg:p-1 ">
            {" "}
            {filteredProject.project_details}
          </p>
        </div>
      </div>
    </section>
  );
};

export default projectDetail;

export const getStaticPaths = async () => {
  const projects = await getProjects();

  const paths = projects.map((project) => ({
    params: {
      porjectId: project.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const projects = await getProjects();

  const filteredProject = projects.find(
    (project) => project.id == params.porjectId
  );

  return {
    props: { filteredProject },
  };
};
