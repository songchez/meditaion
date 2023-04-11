"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MeditEditor() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-[150px] rounded-2xl p-1">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="말씀을 읽으면서 📒 묵상한 내용을 적어보세요."
      />
    </div>
  );
}
