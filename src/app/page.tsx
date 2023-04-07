import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import riceIcon from "public/icon_rice.svg";
import MeditEditor from "@/components/MeditEditor";

export default function Home() {
  function onSubmitHandler() {
    console.log("Submit!");
    // TODO:제출해야댐
  }
  return (
    <div className="p-5">
      <SearchBar />
      <ReadInput />
      <MeditEditor />
      <button className="btn" onClick={onSubmitHandler}>
        <Image src={riceIcon} alt="send"></Image>
      </button>
    </div>
  );
}
