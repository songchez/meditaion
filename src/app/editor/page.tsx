import CreatePost from "@/components/createPost";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function Editor() {
  // 세션 가져오기 -> 유저이메일 가져오기 props로 넣기
  const session: { user: { email: string } } | null = await getServerSession();
  if (session !== null) {
    const sessionEmail: string = session.user.email;
    return (
      <div>
        <CreatePost sessionEmail={sessionEmail} />
      </div>
    );
  }

  return notFound;
}
