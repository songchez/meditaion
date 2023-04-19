import CreatedAt from "@/components/CreatedAt";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

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
    <div className="p-5 mt-3 flex justify-left items-center shadow-md shadow-primary rounded-3xl">
      <div className="container grid gap-2">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`meditations/${post.id}`}>
                <div className="flex flex-col w-full border-opacity-50">
                  <div
                    className={`grid card bg-secondary/10 border-1 border-opacity-40 border-slate-800 p-2 text-slate-800 shadow-sm shadow-primary rounded-box place-items-center`}
                  >
                    <div className="container flex gap-3 justify-between px-6 py-1">
                      <div>
                        <h3 className="text-base">{post.title}</h3>
                        <p className="text-xs text-slate-500">
                          {post.testaBook} {post.whereRead}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          {CreatedAt({ createdAt: post.createdAt })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="flex justify-center text-2xl text-slate-400">...</div>
      </div>
    </div>
  );
}
