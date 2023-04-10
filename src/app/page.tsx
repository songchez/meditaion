import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import MeditEditor from "@/components/MeditEditor";
import OnsubmitButton from "@/components/OnsubmitButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
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
    </div>
  );
}
