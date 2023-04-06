import Image from "next/image";
import riceIcon from "public/icon_rice.svg";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex justify-center items-center">
        <div className="container form-control">
          <div className="input-group w-full p-2">
            <input
              type="text"
              placeholder="검색"
              className="input input-bordered input-primary"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
        <div className="grid h-20 card bg-base-200 rounded-box place-items-center">
          묵상
        </div>
      </div>
    </div>
  );
}
