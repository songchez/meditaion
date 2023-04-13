import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

async function getMeditaitons() {
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  const posts = await prisma.post.findMany({
    where: { authorEmail: sessionEmail },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}

export default async function Meditations() {
  const posts = await getMeditaitons();
  return (
    <div>
      <h1>나의묵상들</h1>
      <div>
        {posts.map((post) => {
          return <div key={post.id}>{post.content}</div>;
        })}
      </div>
    </div>
  );
}
