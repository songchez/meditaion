"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MeditEditor() {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-[150px]">
      <h2 className="text-lg">📒 묵상노트</h2>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}
