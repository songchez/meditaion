export default function ReadInput() {
  return (
    <div className="grid py-3 gap-3 place-items-center">
      <div>
        <div className="form-control">
          <div className="input-group">
            <button className="btn">구약</button>
            <select className="select select-bordered">
              <option disabled selected>
                Pick category
              </option>
              <option>마태복음</option>
              <option>마가복음</option>
              <option>누가복음</option>
              <option>요한복음</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="장"
              className="input input-bordered w-14"
            />
            <input
              type="text"
              placeholder="절"
              className="input input-bordered w-14"
            />
          </div>
        </div>
        <p className="text-xl p-2">~</p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="장"
              className="input input-bordered w-14"
            />
            <input
              type="text"
              placeholder="절"
              className="input input-bordered w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
