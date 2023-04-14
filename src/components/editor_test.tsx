"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />

      <button className="btn" type="submit">
        Create
      </button>
    </form>
  );
}
