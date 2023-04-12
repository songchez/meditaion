import { Post } from "@prisma/client";

type Props = {
  params: {
    posts: Post[];
  };
};

export default async function Meditations({ params: { posts } }: Props) {
  return (
    <div>
      <h1>나의묵상들</h1>
      {posts.map((post) => {
        return <div key={post.id}>{post.content}</div>;
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await fetch("/api/post_service", { method: "GET" });
  return posts;
}
