"use client";

import { newTestament, oldTestament } from "@/data/testaments";
import { Dispatch, SetStateAction, useState } from "react";
import WhereReadinput from "./whereReadinput";

interface Props {
  book: string;
  setBook: any;
  start: string[];
  setStart: any;
  end: string[];
  setEnd: any;
}

export default function ReadInput({
  book,
  setBook,
  start,
  setStart,
  end,
  setEnd,
}: Props) {
  const [testament, setTestament] = useState(["구약", "bg-secondary"]);
  const [books, setBooks] = useState(oldTestament);

  const testamenthandler = () => {
    if (testament[0] === "구약") {
      setTestament(() => ["신약", "bg-primary"]);
      setBooks(() => newTestament);
    } else {
      setTestament(() => ["구약", "bg-secondary"]);
      setBooks(() => oldTestament);
    }
  };

  const bookSelectHandler = (e: { target: { value: string } }) => {
    setBook(e.target.value);
  };

  const whereOnchangeHandler = (
    e: { target: { value: string } },
    idx: number,
    value: string[],
    setFunc: Dispatch<SetStateAction<string[]>>
  ) => {
    let stlist = [...value];
    stlist[idx] = e.target.value;
    setFunc(stlist);
  };

  return (
    <div>
      <div className="flex py-3 gap-3 items-center justify-center ">
        <div>
          <div className="form-control">
            <div className="input-group shadow-sm shadow-secondary rounded-full">
              <button
                className={`btn ${testament[1]} border-0 text-black hover:${testament[1]}`}
                onClick={testamenthandler}
              >
                {testament[0]}
              </button>
              <select className="select" onChange={bookSelectHandler}>
                {books.map((book, index) => {
                  return <option key={index}>{book}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <WhereReadinput
            setFunc={setStart}
            value={start}
            whereOnchangeHandler={whereOnchangeHandler}
          />
          <p className="text-xl p-2">~</p>
          <WhereReadinput
            setFunc={setEnd}
            value={end}
            whereOnchangeHandler={whereOnchangeHandler}
          />
        </div>
      </div>
      <div className="text-lg p-3 text-secondary-focus">{`${book} ${start[0]}장 ${start[1]}절 ~ ${end[0]}장 ${end[1]}절에 대한 묵상`}</div>
    </div>
  );
}
