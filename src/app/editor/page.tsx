import CreatePost from "@/components/createPost";
import { getCurrentUserEmail } from "@/components/utils/getSession";
import { notFound } from "next/navigation";

export default async function Editor() {
  const sessionEmail = await getCurrentUserEmail();
  if (sessionEmail !== null) {
    return (
      <div>
        <CreatePost sessionEmail={sessionEmail} />
      </div>
    );
  }

  return notFound;
}
