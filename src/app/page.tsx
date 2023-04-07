import ReadInput from "@/components/ReadInput";
import SearchBar from "@/components/SearchBar";
import MeditEditor from "@/components/MeditEditor";
import OnsubmitButton from "@/components/OnsubmitButton";

export default function Home() {
  return (
    <div className="p-5">
      <SearchBar />
      <ReadInput />
      <MeditEditor />
      <OnsubmitButton />
    </div>
  );
}
