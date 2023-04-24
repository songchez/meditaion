import { testaments, queryTestament } from "@/data/testaments";

//권(ex: 창세기)인덱스 찾아서 쿼리텍스트 찾아주는 함수
export async function QueryFinder(searchValue: string) {
  let findValueidx = testaments.old.findIndex((e) => e === searchValue);
  if (findValueidx === -1) {
    //구약에서 못 찾았을 때
    findValueidx = testaments.new.findIndex((e) => e === searchValue);
    if (findValueidx === -1) {
      throw new Error(`오류 : ${searchValue}를 찾을 수 없습니다.`);
    } else {
      return queryTestament.new[findValueidx];
    }
  } else {
    //구약에서 찾았을 때
    return queryTestament.old[findValueidx];
  }
}
