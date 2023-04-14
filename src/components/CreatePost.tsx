"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import riceIcon from "public/icon_rice.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost({ sessionEmail }: { sessionEmail: string }) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetch("/api/post_service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, authorEmail: sessionEmail }),
    }).then(async (res) => {
      if (res.status === 200) {
        toast.success("묵상포스트가 생성되었습니다!");
      } else {
        toast.error(await res.text());
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-[300px] rounded-2xl p-3 bg-transparent border-2 border-primary/50">
        <input
          type="text"
          name="title"
          placeholder="제목:"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="input input-ghost w-full max-w-xs my-3 mx-1 text-primary-content"
        />
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(text) => setFormData({ ...formData, content: text })}
          placeholder="말씀을 읽으면서 📒 묵상한 내용을 적어보세요."
        />
        <div className="flex justify-center m-4">
          <button className="btn " type="submit">
            <Image src={riceIcon} alt="send"></Image>
          </button>
        </div>
      </div>
    </form>
  );
}
