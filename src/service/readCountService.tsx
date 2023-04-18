import prisma from "@/lib/prisma";
import { testaments, queryTestament } from "@/data/testaments";

//TODO: 1.유저에 카운트
export async function UserCount({
  userEmail,
  book,
  start,
  end,
}: {
  userEmail: string;
  book: string[];
  start: string[];
  end: string[];
}) {
  function queryFinder(searchValue: string) {
    //권(ex: 창세기)인덱스 찾아서 쿼리텍스트 찾아주는 함수
    let findValueidx = testaments.old.findIndex((e) => e === searchValue);
    if (findValueidx === undefined) {
      findValueidx = testaments.new.findIndex((e) => e === searchValue);
      if (findValueidx === undefined) {
        console.log("오류 : ", searchValue, "를 찾을 수 없습니다.");
      } else {
        return queryTestament.new[findValueidx];
      }
    } else {
      return queryTestament.old[findValueidx];
    }
  }

  async function getYesuResponse() {
    const queryBook = queryFinder(book[0]);
    const yesuJson = fetch(
      `https://yesu.io/bible?lang=kor&doc=${queryBook}&start=${start[0]}:${start[1]}&end=${end[1]}:${end[0]}`
    );
    console.log(yesuJson, "YesuApi");
  }

  const incrVerse = 1;
  const incrChapter = 1;
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
