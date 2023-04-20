import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

interface Props {
  who: string;
  userEmail?: string;
}

export default async function CountUp({ who }: { who: string }) {
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  const countdata: any = await getCount({
    who: who,
    userEmail: await sessionEmail,
  });
  if (countdata !== null) {
    return (
      <div className="rounded-box p-3 shadow-lg">
        {who === "global" ? <span>함께</span> : <span>당신</span>}
        <p className="font-mono text-2xl text-center">
          {countdata.countChapter}장 / {countdata.countVerse}절
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export async function getCount({ who, userEmail }: Props) {
  if (who === "user") {
    if (userEmail !== undefined) {
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });
      return user;
    } else {
      return null;
    }
  } else if (who === "global") {
    const globalCount = await prisma.globalCount.findFirst({
      where: { id: 1 },
    });
    return globalCount;
  } else {
    console.log("오류");
  }
}
