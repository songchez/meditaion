import { getServerSession } from "next-auth/next";

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory

// 세션 가져오기 -> 유저이메일 가져오기 props로 넣기
export async function getCurrentUserEmail() {
  const session: { user: { email: string } } | null = await getServerSession();
  console.log(session, "세션세션");
  if (session !== null && session.user.email.length > 0) {
    const sessionEmail: string = session.user.email;
    return sessionEmail;
  } else {
    return null;
  }
}
