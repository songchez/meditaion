"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import riceIcon from "public/icon_rice.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReadInput from "./ReadInput";
import { UserCount } from "@/service/readCountService";

export default function CreatePost({ sessionEmail }: { sessionEmail: string }) {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [book, setBook] = useState("창세기");
  const [start, setStart] = useState(["1", "1"]);
  const [end, setEnd] = useState(["1", "1"]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/post_service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        authorEmail: sessionEmail,
        whereRead: `${start[0]}장${start[1]}절 ~ ${end[0]}장${end[1]}절`,
        testaBook: JSON.stringify(book),
      }),
    }).then(async (res) => {
      if (res.status === 200) {
        await UserCount({
          userEmail: sessionEmail,
          book: book,
          start: start,
          end: end,
        });
        toast.success("묵상포스트가 생성되었습니다!");
      } else {
        toast.error(await res.text());
      }
    });
  };

  return (
    <div>
      <ReadInput
        book={book}
        setBook={setBook}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
      />
      <form onSubmit={handleSubmit}>
        <div className="min-h-[300px] rounded-2xl p-3 bg-transparent shadow-sm shadow-secondary">
          <input
            type="text"
            name="title"
            required
            placeholder="제목:"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="input input-ghost w-full max-w-xs my-3 mx-1 text-primary-content text-lg font-bold"
          />
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(text) => setFormData({ ...formData, content: text })}
            placeholder="말씀을 읽으면서 📒 묵상한 내용을 적어보세요."
          />
          <div className="flex justify-center m-4">
            <button
              className="btn btn-circle btn-lg border-0 shadow-md shadow-primary"
              type="submit"
            >
              <Image src={riceIcon} alt="send"></Image>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
