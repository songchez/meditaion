import { getServerSession } from "next-auth";

export default async function GetMeditaitons() {
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  await fetch("/api/post_service", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authorEmail: sessionEmail }),
  }).then((res) => {
    const posts = res.body;
    return posts;
  });
}
