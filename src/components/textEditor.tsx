"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor() {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-[300px]">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}
