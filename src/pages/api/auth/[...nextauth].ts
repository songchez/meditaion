import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
  session: {
    /*
     * 세션을 어떻게 할것인지? databse방식, jwt방식.
     * 기본값은 세션 쿠키에 저장된 암호화된 JWT(JWE)인 'jwt'이다.
     * 어댑터를 쓰면 기본값은 'database'다.
     * jwt강제 가능하다.
     * database를 쓰면 sessioncookie만 뭐시기저시기
     * strategy: "jwt",
     */
    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
});
