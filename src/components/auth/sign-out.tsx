"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className=" hover:text-stone-200 transition-all"
      onClick={() => signOut()}
    >
      로그아웃
    </button>
  );
}
