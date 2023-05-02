import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export interface Post {
  title: string;
  content: string;
  authorEmail: string;
  whereRead: string;
  testaBook: string;
  whereReadQuery: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { authorEmail } = req.body;
    const posts = await prisma.post.findMany({
      where: { authorEmail: authorEmail },
      orderBy: { createdAt: "desc" },
      take: 15,
    });
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const {
      title,
      content,
      authorEmail,
      whereRead,
      testaBook,
      whereReadQuery,
    }: Post = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorEmail,
        whereRead,
        testaBook,
        whereReadQuery,
      },
    });
    res.status(201).json(post);
  } else if (req.method === "DELETE") {
    //쿼리스트링으로 통신. 너무 중요한 정보는 쓰면 안되것다.
    const query = req.query;
    const { id } = query;
    const deletePost = await prisma.post.delete({
      where: { id: Number(id) },
    });
    res.status(204).json("삭제완료");
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
