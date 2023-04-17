import { Dispatch, SetStateAction } from "react";

interface inputProps {
  setFunc: Dispatch<SetStateAction<string[]>>;
  value: string[];
  whereOnchangeHandler: (
    e: {
      target: {
        value: string;
      };
    },
    idx: number,
    value: string[],
    setFunc: Dispatch<SetStateAction<string[]>>
  ) => void;
}

export default function WhereReadinput({
  setFunc,
  value,
  whereOnchangeHandler,
}: inputProps) {
  return (
    <div className="form-control shadow-secondary shadow-sm rounded-full">
      <div className="input-group">
        <input
          type="text"
          placeholder="장"
          className="input w-14"
          onChange={(e) => {
            whereOnchangeHandler(e, 0, value, setFunc);
          }}
        />
        <input
          type="text"
          placeholder="절"
          className="input w-14"
          onChange={(e) => {
            whereOnchangeHandler(e, 1, value, setFunc);
          }}
        />
      </div>
    </div>
  );
}
