import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAddressBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { BsCalendar2Date } from "react-icons/bs";

const AllBlog = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          "https://portfolio-server-black-eight.vercel.app/api/v1/blog"
        );
        setBlogs(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteId = async (id) => {
    try {
      await axios?.delete(
        `https://portfolio-server-black-eight.vercel.app/api/v1/delete-blog/${id}`
      );
      // remove it
      setBlogs(blog?.filter((blog) => blog?._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return (
    <section className="pt-8 pl-6 text-white">
      <h1 className="flex items-center font-semibold gap-4 pb-6 text-3xl text-[#DB2955]">
        <FaAddressBook />
        Watch Your All Blog
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {blog?.map((blog, index) => (
          <div
            key={blog?._id}
            className=" shadow-lg shadow-[#3d1e27]  p-4 rounded-md text-[18px]"
          >
            <h3 className="pb-4 font-semibold">Blog No: {index + 1}</h3>
            <h1 className="flex items-center gap-2 text-2xl font-bold ">
              <TfiWrite />
              {blog.title}
            </h1>
            <h3 className="text-[18px] text-gray-400 pb-3 flex items-center gap-3 ml-2 pt-2">
              <BsCalendar2Date />
              {blog.date}
            </h3>
            <p>{blog?.content}</p>

            <button
              className="mt-4 bg-transparent btn"
              onClick={() => handleDeleteId(blog._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlog;
