import { QueryFinder } from "@/components/utils/queryfinder";
import prisma from "@/lib/prisma";
import { type NextApiRequest, type NextApiResponse } from "next";

interface CountData {
  userEmail: string;
  book: string;
  start: string[];
  end: string[];
}

// 1.유저에 카운트
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userEmail, book, start, end }: CountData = req.body;
    // 말씀 데이터 패치해오고 데이터 넣기

    const queryBook: string = await QueryFinder(book);
    const whereReadQuery = `https://yesu.io/bible?lang=kor&doc=${queryBook}&start=${start[0]}:${start[1]}&end=${end[0]}:${end[1]}`;
    const yesuRes = await fetch(whereReadQuery);
    if (!yesuRes.ok) {
      throw new Error("오류 : 왜않되????????????");
    }
    const yesuJson: YesuJson[] = await yesuRes.json();

    // 패치해온 후 업데이트(count데이터 increment)
    if (yesuJson !== null) {
      // 장수 : 더해서 넣기
      const incrChapter = Number(end[0]) - Number(start[0]);
      // 절수 : 길이계산해서 넣기
      const incrVerse = yesuJson.length;

      await prisma.user.update({
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
      res.status(200).json(yesuJson);
      // res.status(201).json(user);

      // 2.글로벌에 카운트
      await prisma.globalCount.update({
        where: { id: 1 },
        data: {
          countVerse: {
            increment: incrVerse,
          },
          countChapter: {
            increment: incrChapter,
          },
        },
      });
      // res.status(203).json(globalCount);
    } else {
      res.status(401).json("오류: 데이타 없음!");
    }
  }
}
