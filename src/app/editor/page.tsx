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
      <ReadInput />
      <MeditEditor />
      <OnsubmitButton />
      <CreatePost sessionEmail={sessionEmail} />
    </div>
  );
}
