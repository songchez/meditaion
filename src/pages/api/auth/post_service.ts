export interface Post {
  title: string;
  content: string;
  authorId: number;
}

// export const postService = {
//   create: (data: Post) => prisma.post.create({ data }),
//   findById: (id: number) => prisma.post.findUnique({ where: { id } }),
//   update: (id: number, data: Post) =>
//     prisma.post.update({ where: { id }, data }),
//   delete: (id: number) => prisma.post.delete({ where: { id } }),
// };

// pages/api/posts.ts
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content, authorId }: Post = req.body;
    const post = await prisma.post.create({
      data: { title, content, authorId },
    });
    res.status(201).json(post);
  } else if (req.method === "GET") {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
