import { Post } from "@prisma/client";
import prisma from "@/lib/prisma";
import PostPageForRead from "@/components/postPageForRead";

async function getPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: { id: Number(postId) },
  });
  return post;
}

async function getVerse(bibleQueryData: string) {
  const res = await fetch(bibleQueryData);
  if (!res.ok) {
    throw new Error("오류 : 왜않되????????????");
  }
  return await res.json();
}

interface Ppost {
  params: { slug: string };
}

export default async function Postpage({ params: { slug } }: Ppost) {
  const post: Post | null = await getPost(slug);

  if (post === null) {
    return <div>Post not found</div>;
  } else {
    const currentVerses: YesuJson[] = await getVerse(post.whereReadQuery);

    return (
      <div className="p-5 grid gap-2 mb-14">
        <h1 className="text-3xl font-bold text-center">{post.title}</h1>

        <h2 className="text-sm text-gray-500 text-center">
          {post.testaBook} {post.whereRead}에 대한 묵상
        </h2>
        <p className="text-xs text-gray-500 text-center">
          {post.createdAt.toLocaleString("ko-KR")}
        </p>
        <div className="divider m-0"></div>
        <div className="flex justify-start">
          <div className="flex flex-col items-start gap-3"></div>
        </div>
        <div>
          <div className="collapse collapse-arrow border border-base-200 rounded-box shadow-sm shadow-primary">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              ☞ {post.testaBook} {post.whereRead}
            </div>
            <div className="collapse-content">
              <div className="grid gap-1">
                {currentVerses.map((currentVerse, index) => {
                  return (
                    <div key={index}>
                      {currentVerse.verse === "1" ? (
                        <p className="text-lg text-primary-content font-bold text-center">
                          {currentVerse.chapter} 장
                        </p>
                      ) : null}
                      <p className="text-sm text-primary-content text-left">
                        <span className="font-medium">
                          {currentVerse.verse}
                        </span>
                        : {currentVerse.message}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <PostPageForRead content={post.content}></PostPageForRead>
        <p className="text-xs text-gray-500 text-center">
          이 포스트를 {post.likes}명이❤️좋아합니다
        </p>
        <p className="text-xs text-gray-500 text-center">
          이 포스트를 {post.views}명이🧔🏻‍♀️보았습니다
        </p>
      </div>
    );
  }
}
