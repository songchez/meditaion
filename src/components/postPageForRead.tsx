"use client";

import ReactQuill from "react-quill";

export default function PostPageForRead({ content }: any) {
  return (
    <div>
      <ReactQuill readOnly={true} theme="bubble" value={content} />
    </div>
  );
}
