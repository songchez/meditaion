"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SignOut() {
  const router = useRouter();
  return (
    <button
      className=" hover:text-stone-200 transition-all"
      onClick={() => {
        signOut();
        router.refresh();
      }}
    >
      로그아웃
    </button>
  );
}
