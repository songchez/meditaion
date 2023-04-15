"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignOut() {
  const router = useRouter();
  return (
    <button
      className=" hover:text-stone-200 transition-all"
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      로그아웃
    </button>
  );
}
