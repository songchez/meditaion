import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import MeditEditor from "@/components/MeditEditor";
import OnsubmitButton from "@/components/OnsubmitButton";
import Link from "next/link";
import CreatePost from "@/components/editor_test";
import { getServerSession } from "next-auth";

export default async function Editor() {
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  return (
    <div>
      <SearchBar />
      <Link
        href="/protected"
        prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
        className="text-stone-400 underline hover:text-stone-200 transition-all"
      >
        Protected Page
      </Link>
      <ReadInput />
      <MeditEditor />
      <OnsubmitButton />
      <CreatePost sessionEmail={sessionEmail} />
    </div>
  );
}
