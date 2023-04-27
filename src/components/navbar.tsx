import SignOut from "./signOut";
import Link from "next/link";
import { getCurrentUser } from "./utils/getSession";
import Image from "next/image";
import ThemeToggle from "./themeToggle";

export default async function Navbar() {
  const session = await getCurrentUser();

  return (
    <div className="navbar rounded-full shadow-sm shadow-secondary text-primary-content">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          바이블노트
        </Link>
      </div>
      <ThemeToggle />
      {session !== null ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar shadow-sm"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={session.image}
                  alt={session.name}
                  width={50}
                  height={50}
                ></Image>
              </div>
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
          <Link href="/api/auth/signin">로그인</Link>
        </div>
      )}
    </div>
  );
}
