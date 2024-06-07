import axios from "axios";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";

const Article = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          "https://portfolio-server-black-eight.vercel.app/api/v1/article"
        ); // Adjust the URL as per your backend API
        setBlogs(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const getFirst10Words = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
  };

  return (
    <section className="max-w-6xl mx-auto ">
      <div className="max-w-6xl mx-auto">
        <Header />
      </div>
      <div className="grid grid-cols-1 gap-6 ml-4 lg:grid-cols-2 lg:ml-14">
        {blog?.map((blog) => (
          <div
            key={blog?._id}
            class="block relative group pt-4 pb-8 pl-4 pr-4 rounded-md shadow shadow-purple-900  max-w-sm"
          >
            <Link href={`/article/${blog?._id}`} target="_blank" class="block">
              <div class=" rounded-md  overflow-hidden ">
                <Image src={blog?.image} alt="" height={600} width={600} />
              </div>

              <div class=" space-y-1 mt-3">
                <h3 class=" text-2xl pb-2 font-bold text-white">
                  {blog?.title}
                </h3>
                <h5 class="flex gap-2 text-[18px] items-center text-gray-500">
                  <CiCalendarDate />
                  {blog?.date}
                </h5>
                <p className="flex items-center gap-2 text-[18px] text-white">
                  <BiCommentDetail />
                  {getFirst10Words(blog?.details)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
