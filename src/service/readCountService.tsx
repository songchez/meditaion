import prisma from "@/lib/prisma";

//TODO: 1.유저에 카운트
export async function UserCount({
  userEmail,
  incrVerse,
  incrChapter,
}: {
  userEmail: string;
  incrVerse: number;
  incrChapter: number;
}) {
  const user = await prisma.user.update({
    where: { email: userEmail },
    data: {
      countVerse: {
        increment: incrVerse,
      },
      countChapter: {
        increment: incrChapter,
      },
    },
  });
}
//TODO: 2.글로벌에 카운트
export async function GlobalCount() {}
