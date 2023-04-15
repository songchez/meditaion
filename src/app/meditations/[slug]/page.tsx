import { Post } from "@prisma/client";
import prisma from "@/lib/prisma";
import PostPageForRead from "@/components/PostPageForRead";

async function getPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: { id: Number(postId) },
  });
  return post;
}

interface Ppost {
  params: { slug: string };
}

export default async function Postpage({ params: { slug } }: Ppost) {
  const post: Post | null = await getPost(slug);
  if (post === null) {
    return <div>Post not found</div>;
  }
  return (
    <div className="p-5">
      <h1>{post.title}</h1>
      <PostPageForRead content={post.content}></PostPageForRead>
    </div>
  );
}
