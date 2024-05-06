import Image from "next/image";
import Link from "next/link";

const Article = () => {
  const allArticle = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1525972292986-69295aebf4cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A Journey through Design",
      text: " Embarking on a journey through the pages of a design book isn't just about absorbing knowledge; it's about unlocking the gates to creativity. As you delve into the intricacies of typography, color theory, and layout principles, each chapter becomes a stepping stone, guiding you through the labyrinth of design concepts.With every turn of the page, you're not just reading; you're immersing yourself in a world where ideas flourish and boundaries blur. The title of the book, Unlocking Creativity, serves as a beacon, signaling that within its covers lies the key to unleashing your imagination.But it's not just about absorbing information; it's about applying it. With each lesson learned, you find yourself itching to pick up a pencil, open your design software, and bring your ideas to life. The book becomes more than just a source of knowledge; it becomes a companion in your creative journey. So, as you curl up with Unlocking Creativity: A Journey through Design, remember that the title isn't just a label; it's a promise.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Art of Making Good Design",
      text: "In the realm of creativity, design stands as a testament to human ingenuity and expression. From the sleek lines of modern architecture to the pixel-perfect layouts of digital interfaces, good design captivates our senses and enriches our lives. But what exactly makes a design good? Let's explore the principles and practices that elevate design from ordinary to extraordinary.Understanding the Audience: At the heart of every good design lies a deep understanding of the audience. Whether it's a product packaging or a website interface, knowing who you're designing for is paramount. Take the time to research your target demographic, understand their needs, preferences, and pain points. By empathizing with your audience, you can create designs that resonate on a deeper level.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto mb-8 text-white">
      <h1 className="pt-12 pb-6 text-3xl font-bold">
        Discover Inspiring Articles Now
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {allArticle?.map((article) => (
          <div key={article?.id}>
            <Image
              src={article?.image}
              alt=""
              height={500}
              width={700}
              loader={({ src }) => src}
            />
            <h1 className="pt-4 text-[30px] font-bold">{article?.title}</h1>
            <p className="text-[18px] text-gray-400">{article?.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 lg:justify-start ">
        <Link href="/">
          <button className="text-lg text-white border-none rounded-none btn bg-[#010b1c] hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white">
            Move Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Article;
