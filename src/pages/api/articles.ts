// pages/api/articles.ts

import { NextApiRequest, NextApiResponse } from "next";
import { articleProps } from "../../../props/props";
import articlesData from "../../../src/data/articlesData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const articles: articleProps = articlesData

  if (req.method === "GET") {
    res.status(200).json(articles);
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
