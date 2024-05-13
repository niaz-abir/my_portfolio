import Head from "next/head";
import { Inter } from "next/font/google";

// import Tolling from "@/components/tolling/Tolling";
// import AllProject from "@/components/project/AllProject";

const inter = Inter({ subsets: ["latin"] });
import { getProjects } from "../utils/getproject";

import About from "../components/about/About";
import Skill from "../components/Skill/Skill";
import AllProjects from "../components/Projects/AllProjects";
import Header from "../components/Header/Header";
import Connect from "../components/connect/Connect";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Niaz Uddin Abir</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 mx-auto max-w-[70rem]">
        <Header />
        <About />

        <Skill />

        <AllProjects projects={projects}></AllProjects>

        {/* <AllProject ></AllProject> */}
        <Contact />

        <Connect />
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();
  console.log(projects);
  return {
    props: {
      projects,
    },
  };
};
