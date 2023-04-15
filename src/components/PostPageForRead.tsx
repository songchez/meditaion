"use client";

import ReactQuill from "react-quill";

export default function PostPageForRead({ content }: any) {
  return (
    <div>
      <ReactQuill theme="bubble" value={content} readOnly />
    </div>
  );
}
