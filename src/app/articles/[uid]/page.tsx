// pages/articles/[uid].tsx
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import Link from "next/link";

const ArticlePage = async ({
  params
}: {
  params: {
    uid: string;
  }
}) => {
  const { uid } = params;
  const client = createClient();
  let article;
  try {
    article = await client.getByUID('articles', uid);
  } catch (error) {
    notFound();
  }

  const { title, description, previewimage } = article.data;
  const publicationDate = new Date(article.first_publication_date).toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/articles" className="mb-8 block text-left">
        <button className="bg-[#3743BA] text-white font-bold py-2 px-4 rounded">
          Retour
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <PrismicNextImage field={previewimage} className="w-full h-96 object-cover rounded-lg mb-4" />
        <div className="flex justify-between w-full mb-8">
          <p className="text-gray-600 text-left">Par {article.data.author ?? 'Unknown'}</p>
          <p className="text-gray-600 text-right">{publicationDate}</p>
        </div>
        <div className="prose lg:prose-xl max-w-none">
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
