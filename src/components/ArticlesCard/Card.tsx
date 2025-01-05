// components/ArticleCard.tsx
import React from 'react';
import { PrismicNextImage } from "@prismicio/next";

interface CardProps {
  article: any;
}

const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={`/articles/${article.uid}`} className="block">
        <PrismicNextImage field={article.data.previewimage} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{article.data.title}</h2>
        </div>
      </a>
    </li>
  );
};

export default Card;
