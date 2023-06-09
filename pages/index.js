import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/about/About";
import Tolling from "@/components/tolling/Tolling";
import AllProject from "@/components/project/AllProject";
import Contact from "@/components/contact/Contact";
import Connect from "@/components/connect/Connect";

const inter = Inter({ subsets: ["latin"] });

import { getProjects } from "@/utils/getproject";
import Footer from "@/components/Footer/Footer";

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
        <Header></Header>
        <About></About>
        <Tolling></Tolling>
        <AllProject projects={projects}></AllProject>
        <Contact></Contact>
        <Connect></Connect>
        <Footer></Footer>
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
