"use client";

import { useState } from "react";

export default function CountUp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        읽기
      </button>
    </div>
  );
}
