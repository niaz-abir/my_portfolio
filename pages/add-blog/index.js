import React from "react";
import dynamic from "next/dynamic";

const AddBlog = dynamic(() => import("../../components/createBlog/index.js"), {
  ssr: false,
});

const indexPage = () => {
  return (
    <div>
      <h1 className="text-[#DB2955] text-2xl font-bold pt-8 pb-4 mt-14">
        Submit Your Blog :
      </h1>
      <AddBlog />
    </div>
  );
};

export default indexPage;
