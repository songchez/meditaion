import { getServerSession } from "next-auth/next";
import SignOut from "./sign-out";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-end items-center">
      {session && (
        <div>
          <p className="text-stone-200 text-sm">
            Signed in as {session.user?.email}
          </p>
          <SignOut />
        </div>
      )}
    </div>
  );
}
