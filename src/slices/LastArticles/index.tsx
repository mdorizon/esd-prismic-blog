// slices/LastArticles/index.tsx
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Card from "@/components/ArticlesCard";
import { createClient } from "@/prismicio";

/**
 * Props for `LastArticles`.
 */
export type LastArticlesProps = SliceComponentProps<Content.LastArticlesSlice>;

/**
 * Component for "LastArticles" Slices.
 */
const LastArticles = async ({ slice }: LastArticlesProps): Promise<JSX.Element> => {
  const client = createClient();
  const articles = await client.getAllByType('articles');

  // Ensure articles_number is a number and not null or undefined
  const articles_number = slice.primary.articles_number ? Number(slice.primary.articles_number) : 3;
  const displayedArticles = articles.slice(0, articles_number);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <h2 className="text-[#3743BA] text-3xl font-bold mb-6 text-center">Derniers Articles</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedArticles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </ul>
    </section>
  );
};

export default LastArticles;
