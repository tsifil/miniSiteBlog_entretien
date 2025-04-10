
import { articleProps } from "../../../props/props";
import Image from "next/image";
import Link from "next/link";

export default function ListeArticles({ articles }: articleProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
  <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
    Nos articles
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {articles.map((article) => (
      <div
        key={article.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
      >
        <Image
          src={article.image}
          alt={article.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.description}
          </p>
          <p className="text-gray-500 text-sm">
            Publié le: {new Date(article.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="p-6 text-center">
          <Link
            href={`/articles/${article.id}`}
            className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Voir le détail
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

