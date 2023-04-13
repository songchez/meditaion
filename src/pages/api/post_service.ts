export interface Post {
  title: string;
  content: string;
  authorEmail: string;
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
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(); //user세션 가져오기 -> 쿼리문 작성

  const sessionEmail: any = session?.user?.email;

  if (req.method === "POST") {
    const { title, content, authorEmail }: Post = req.body;
    const post = await prisma.post.create({
      data: { title, content, authorEmail },
    });
    res.status(201).json(post);
  } else if (req.method === "GET" && session !== null) {
    const posts = await prisma.post.findMany({
      where: { authorEmail: sessionEmail },
    });
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
