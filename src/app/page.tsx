import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import riceIcon from "public/icon_rice.svg";
import MeditEditor from "@/components/MeditEditor";

export default function Home() {
  return (
    <div className="p-5">
      <SearchBar />
      <div className="grid py-10 gap-3 card bg-base-200 rounded-box place-items-center">
        <ReadInput />

        <MeditEditor />
        <button className="btn">
          <Image src={riceIcon} alt="send"></Image>
        </button>
      </div>
    </div>
  );
}
