import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin mt-52 inline-block w-7 h-7 border-[3px] border-current border-t-transparent text-secondary-focus rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only text-primary-content">Loading...</span>
      </div>
    </div>
  );
}
