import Header from "../../components/Header/Header";
import axios from "axios";

import { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const Article = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          "https://portfolio-server-black-eight.vercel.app/api/v1blog"
        ); // Adjust the URL as per your backend API
        setBlogs(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <Header />
      </div>
      <div className="max-w-6xl pt-8 pl-6 mx-auto text-white">
        <h1 className="flex items-center gap-4 pb-6 text-3xl font-semibold ">
          <FaAddressBook />
          Enhance Your Blog
        </h1>
        <hr className="mb-10 -mt-2 w-80"></hr>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {blog?.map((blog, index) => (
            <div
              key={blog?._id}
              className=" shadow-xl   border-t-2 border-gray-700 shadow-[#3d1e27]  p-4 rounded-md text-[18px]"
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
      </div>
    </section>
  );
};

export default Article;
