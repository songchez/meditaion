"use client";

import Image from "next/image";
import riceIcon from "public/icon_rice.svg";
export default function OnsubmitButton() {
  const onSubmitHandler = () => {
    console.log("Submit!");
    // TODO:제출데이터
  };
  return (
    <button className="btn" onClick={onSubmitHandler}>
      <Image src={riceIcon} alt="send"></Image>
    </button>
  );
}
