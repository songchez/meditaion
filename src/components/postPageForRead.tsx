"use client";

import ReactQuill from "react-quill";

export default function PostPageForRead({ content }: any) {
  return (
    <div>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
      {/* <ReactQuill readOnly={true} theme="bubble" value={content} /> */}
    </div>
  );
}
