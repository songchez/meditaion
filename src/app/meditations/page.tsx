import { Post } from "@prisma/client";
import { toast } from "react-hot-toast";

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
  try {
    const posts = await fetch("/api/post_service");
    return posts;
  } catch (error: any) {
    toast.error(error);
    return []; // or you can return an empty array or object
  }
}
