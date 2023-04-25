import CreatePost from "@/components/createPost";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { notFound } from "next/navigation";

export default async function Editor() {
  // 세션 가져오기 -> 유저이메일 가져오기 props로 넣기
  const session: Session | null = await getSession();
  if (
    //이렇게 하는게 맞나싶다... null safty getServerSession에서는 어떻게 해야하지?
    //지금이걸 미들웨어로 추가하면 될듯
    session !== null &&
    session.user !== undefined &&
    session.user.email !== null &&
    session.user.email !== undefined &&
    session.user.email.length > 0
  ) {
    const sessionEmail: string = session.user.email;
    return (
      <div>
        <CreatePost sessionEmail={sessionEmail} />
      </div>
    );
  }

  return notFound;
}
