import SearchBar from "@/components/SearchBar";
import TextEditor from "@/components/TextEditor";
import Image from "next/image";
import riceIcon from "public/icon_rice.svg";

export default function Home() {
  return (
    <div className="p-5">
      <SearchBar />
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid py-10 gap-3 card bg-base-200 rounded-box place-items-center">
          <div>
            구약
            <input
              type="radio"
              name="testament"
              className="radio radio-primary"
              checked
            />
            신약
            <input
              type="radio"
              name="testament"
              className="radio radio-primary"
            />
          </div>
          <div className="form-control">
            <div className="input-group">
              <select className="select select-bordered">
                <option disabled selected>
                  Pick category
                </option>
                <option>마태복음</option>
                <option>마가복음</option>
                <option>누가복음</option>
                <option>요한복음</option>
              </select>
              <input
                type="text"
                placeholder="장"
                className="input input-bordered w-16"
              />
              <input
                type="text"
                placeholder="절"
                className="input input-bordered w-20"
              />
              <button className="btn">
                <Image src={riceIcon} alt="send"></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid card bg-base-200 p-3 rounded-box place-items-center">
          <h2 className="text-xl p-3">묵상</h2>
          <TextEditor />
        </div>
      </div>
    </div>
  );
}
