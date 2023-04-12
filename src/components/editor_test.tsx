"use client";
import { useState } from "react";
import { useRouter } from "next/router";

const CreatePost = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, authorId: 1 }),
    });
    if (response.ok) {
      const { id } = await response.json();
      router.push(`/posts/${id}`);
    }
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

      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePost;
