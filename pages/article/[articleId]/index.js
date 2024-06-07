/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Image from "next/image";
import { MdOutlineSubtitles } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";

const ArticleDetails = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (articleId) {
      const fetchData = async () => {
        console.log(articleId);
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/article/${articleId}`
          );
          console.log("Data fetched:", response.data);
          setArticle(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    } else {
      console.log("here");
    }
  }, [articleId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading article: {error.message}</p>;

  return (
    <section className="max-w-6xl mx-auto">
      <Header />
      <div className="flex justify-center">
        <img
          className=" h-[400px] w-[1000px] rounded-md"
          src={article?.image}
          alt=""
        />
      </div>
      <div className="pt-6 pl-20">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
          <MdOutlineSubtitles />
          {article?.title}
        </h1>
        <h4 className="flex items-center gap-2 pb-6 text-gray-500">
          <CiCalendarDate />
          {article?.date}
        </h4>
        <p className="flex gap-2 items-center text-[18px] text-white">
          <CgDetailsMore />
          {article?.details}
        </p>
        <p className="pt-6 text-white text-[18px]">
          Thank you for reading it.Hopefully you enjoy it.
        </p>
        <p className="text-white text-[18px]">niazabir55@gmail.com</p>
      </div>
    </section>
  );
};

export default ArticleDetails;
