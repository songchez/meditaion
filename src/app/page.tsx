import CountUp from "@/components/countUp";

interface TodayVerse {
  chapter: string;
  verse: string;
  message: string;
}

export default async function Home() {
  const todayVerse: TodayVerse[] = await getTodayVerse();
  return (
    <div>
      <div className="p-8 rounded-2xl text-primary-content">
        <div>
          &quot;
          {todayVerse.map((Verse, id) => {
            return <span key={id}>{Verse.message} </span>;
          })}
          &quot;
        </div>
        <div className="w-full text-right">(요한복음 1장 1절 ~ 4절)</div>
        <div>
          {/* @ts-expect-error Async Server Component */}
          <CountUp who="user" />
        </div>
        <div>
          {/* @ts-expect-error Async Server Component */}
          <CountUp who="global" />
        </div>
      </div>
    </div>
  );
}

async function getTodayVerse() {
  const todayVerse = await fetch(
    "https://yesu.io/bible?lang=kor&doc=john&start=1:1&end=1:4"
  ).then((res) => res.json());

  return todayVerse;
}
