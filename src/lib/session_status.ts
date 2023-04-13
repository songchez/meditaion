import { getServerSession } from "next-auth/next";

export default async function SessionStatus() {
  const session = await getServerSession();
  return session;
}
