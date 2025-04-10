import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import articlesData from "../../../data/articlesData.json";
import { Article } from '../../../../types/type';
import Link from 'next/link';

export default function ArticleDetail({ article }: { article: Article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Chargement en cours :)</div>;
  }

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">{article.title}</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={450}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="mb-6">
        <p className="text-gray-600">{article.description}</p>
      </div>
      <div className="text-lg text-gray-800">
        <p>{article.content}</p>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Publié le: {new Date(article.createdAt).toLocaleDateString()}</p>
      </div>

      <br />

      <hr />

      <br />
      <Link href="/">Retour</Link>
    </div>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articlesData.map((article) => ({
    params: { id: article.id },
  }));

  return { paths, fallback: 'blocking' };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  const article = articlesData.find((article) => article.id === id);

  if (!article) {
    return { notFound: true};
  }

  return {
    props: {
      article,
    },
    revalidate: 10, 
  };
};
