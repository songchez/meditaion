import { getServerSession } from "next-auth/next";
import SignOut from "./auth/sign-out";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="navbar rounded-full shadow-sm shadow-secondary">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          바이블노트
        </Link>
      </div>
      {session ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar shadow-sm"
            >
              <div className="w-10 rounded-full">{session.user?.email}</div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">내정보</a>
              </li>
              <li>
                <div>
                  <SignOut />
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="p-5 font-bold text-slate-400">
          <Link href="/login">로그인</Link>
        </div>
      )}
    </div>
  );
}
