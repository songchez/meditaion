import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import CreatePost from "@/components/CreatePost";
import { getServerSession } from "next-auth";

export default async function Editor() {
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  return (
    <div>
      <SearchBar />
      <ReadInput />
      <CreatePost sessionEmail={sessionEmail} />
    </div>
  );
}
