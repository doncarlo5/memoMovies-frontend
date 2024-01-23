import React from "react";

function handleKeyDown(e) {}

function Search() {
  return (
    <div className="bg-gray-200">
      <div className="">
        <div className="">
          <input
            type="text"
            className="border opacity-30 border-black h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none focus:opacity-90"
            placeholder="Search your movie..."
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
