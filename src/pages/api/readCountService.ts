import { testaments, queryTestament } from "@/data/testaments";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface CountData {
  userEmail: string;
  book: string;
  start: string[];
  end: string[];
}
//TODO: 1.유저에 카운트
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userEmail, book, start, end }: CountData = req.body;

    //권(ex: 창세기)인덱스 찾아서 쿼리텍스트 찾아주는 함수
    function queryFinder(searchValue: string) {
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
    //말씀 데이터 패치해오기
    async function getYesuResponse() {
      const queryBook = queryFinder(book);
      const res = await fetch(
        `https://yesu.io/bible?lang=kor&doc=${queryBook}&start=${start[0]}:${start[1]}&end=${end[0]}:${end[1]}`
      );
      if (!res.ok) {
        throw new Error("오류 : 왜않되????????????");
      }
      return await res.json();
    }
    //패치해온 후 업데이트(count데이터 increment)
    interface YesuJson {
      chapter: string;
      verse: string;
      message: string;
    }
    const yesuJson: YesuJson[] = await getYesuResponse();
    if (yesuJson !== null) {
      console.log(Number(end[0]), Number(start[0]));
      const incrChapter = Number(end[0]) - Number(start[0]);
      const incrVerse = yesuJson.length;
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
      res.status(200).json(yesuJson);
      // res.status(201).json(user);

      const globalCount = await prisma.globalCount.update({
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

//TODO: 2.글로벌에 카운트
export async function GlobalCount() {}
