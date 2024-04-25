import Image from "next/image";
import Link from "next/link";

const Article = () => {
  const allArticle = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Do Great Design",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Do Great Design",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto text-white">
      <h1 className="pt-12 pb-6 text-3xl font-bold">Article is here</h1>
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
    </section>
  );
};

export default Article;
