import articlesData from "../../src/data/articlesData.json";
import ListeArticles from "./articles"
import { articleProps } from "../../props/props";

export default function Acceuil({ articles }: articleProps) {
  return <ListeArticles articles={articles}/>
}

export async function getStaticProps() {
    
    const articles = await articlesData;
  
    return {
      props: {
        articles,
      },
      revalidate: 10,
    };
  }
  