import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="w-full fixed bottom-10 flex justify-center items-center">
      <ul className="container flex justify-evenly text-xl">
        <li>
          <Link href="/">입력</Link>
        </li>
        <li>
          <Link href="/dashboard">대시보드</Link>
        </li>
        <li>
          <Link href="/meditation">묵상</Link>
        </li>
        <li>
          <Link href="/misson">미션</Link>
        </li>
      </ul>
    </div>
  );
}
