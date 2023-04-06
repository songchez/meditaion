import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="fixed bottom-0 flex justify-center items-center">
      <ul className="flex gap-4 justify-center items-center text-xl ">
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
