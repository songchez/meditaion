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
    <div className="p-5 flex justify-left items-center shadow-md shadow-primary rounded-3xl">
      <div className="container">
        {posts.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </div>
  );
}
