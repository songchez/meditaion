import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export interface Post {
  title: string;
  content: string;
  authorEmail: string;
  whereRead: string;
  testaBook: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content, authorEmail, whereRead, testaBook }: Post =
      req.body;
    const post = await prisma.post.create({
      data: { title, content, authorEmail, whereRead, testaBook },
    });
    res.status(200).json(post);
  } else if (req.method === "GET") {
    const { authorEmail } = req.body;
    const posts = await prisma.post.findMany({
      where: { authorEmail: authorEmail },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
