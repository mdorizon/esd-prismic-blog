// pages/ArticlesPage.tsx
import Card from "@/components/ArticlesCard";
import { createClient } from "@/prismicio";

const ArticlesPage = async () => {
  const client = createClient();
  const articles = await client.getAllByType('articles');

  return (
    <div className="container mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
