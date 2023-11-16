import Link from "next/link";

const Article = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-32 mb-32 h-[100vh]">
        <h1 className="text-2xl font-bold text-center text-white">
          Article is coming...
        </h1>

        <Link href="/">
          <button className="text-lg mt-14 text-white border-none rounded-none btn bg-[#010b1c] hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white">
            Move Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
