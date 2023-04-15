"use client";

import { newTestament, oldTestament } from "@/data/testaments";
import { useState } from "react";

export default function ReadInput() {
  const [testament, setTestament] = useState(["구약", "bg-secondary"]);
  const [books, setBooks] = useState(oldTestament);
  const [book, setBook] = useState("창세기");
  const [start, setStart] = useState(["1", "1"]);
  const [end, setEnd] = useState(["1", "1"]);

  const testamenthandler = () => {
    if (testament[0] === "구약") {
      setTestament(() => ["신약", "bg-primary"]);
      setBooks(() => newTestament);
    } else {
      setTestament(() => ["구약", "bg-secondary"]);
      setBooks(() => oldTestament);
    }
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
              <select
                className="select"
                onChange={(e) => {
                  setBook(e.target.value);
                }}
              >
                {books.map((book, index) => {
                  return <option key={index}>{book}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="form-control shadow-secondary shadow-sm rounded-full">
            <div className="input-group">
              <input
                type="text"
                placeholder="장"
                className="input w-14"
                onChange={(e) => {
                  let stlist = [...start];
                  stlist[0] = e.target.value;
                  setStart(stlist);
                }}
              />
              <input
                type="text"
                placeholder="절"
                className="input w-14"
                onChange={(e) => {
                  let stlist = [...start];
                  stlist[1] = e.target.value;
                  setStart(stlist);
                }}
              />
            </div>
          </div>
          <p className="text-xl p-2">~</p>
          <div className="form-control">
            <div className="input-group shadow-secondary shadow-sm rounded-full">
              <input
                type="text"
                placeholder="장"
                className="input w-14 "
                onChange={(e) => {
                  let edlist = [...end];
                  edlist[0] = e.target.value;
                  setEnd(edlist);
                }}
              />
              <input
                type="text"
                placeholder="절"
                className="input w-14 "
                onChange={(e) => {
                  let edlist = [...end];
                  edlist[1] = e.target.value;
                  setEnd(edlist);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg p-3 text-secondary-focus">{`${book} ${start[0]}장 ${start[1]}절 ~ ${end[0]}장 ${end[1]}절에 대한 묵상`}</div>
    </div>
  );
}
