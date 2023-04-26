import CreatePost from "@/components/createPost";
import { getCurrentUser } from "@/components/utils/getSession";
import { notFound } from "next/navigation";

export default async function Editor() {
  const session = await getCurrentUser();
  if (session !== null) {
    return (
      <div>
        <CreatePost sessionEmail={session.email} />
      </div>
    );
  }

  return notFound;
}
