"use client";

import { newTestament, oldTestament } from "@/data/testaments";
import { useState } from "react";

export default function ReadInput() {
  const [testament, setTestament] = useState(["구약", "bg-blue-500"]);
  const [Books, setBooks] = useState(oldTestament);

  const testamenthandler = () => {
    if (testament[0] === "구약") {
      setTestament(() => ["신약", "bg-red-500"]);
      setBooks(() => newTestament);
    } else {
      setTestament(() => ["구약", "bg-blue-500"]);
      setBooks(() => oldTestament);
    }
  };

  return (
    <div className="grid py-3 gap-3 place-items-center ">
      <div>
        <div className="form-control">
          <div className="input-group">
            <button
              className={`btn ${testament[1]} text-black hover:bg-transparent`}
              onClick={testamenthandler}
            >
              {testament[0]}
            </button>
            <select className="select select-bordered">
              <option disabled selected>
                어디를 읽을까?...
              </option>
              {Books.map((book, index) => {
                return <option key={index}>{book}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="장"
              className="input input-bordered w-14"
            />
            <input
              type="text"
              placeholder="절"
              className="input input-bordered w-14"
            />
          </div>
        </div>
        <p className="text-xl p-2">~</p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="장"
              className="input input-bordered w-14"
            />
            <input
              type="text"
              placeholder="절"
              className="input input-bordered w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
