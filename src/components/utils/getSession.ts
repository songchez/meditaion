import { getServerSession } from "next-auth/next";

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory

// 세션 가져오기 -> 유저이메일 가져오기 props로 넣기
export async function getCurrentUser() {
  const session: {
    user: { email: string; name: string; image: string };
  } | null = await getServerSession();
  if (session !== null && session.user.email.length > 0) {
    const email: string = session.user.email;
    const name: string = session.user.name;
    const image: string = session.user.image;
    return { email, name, image };
  } else {
    return null;
  }
}
