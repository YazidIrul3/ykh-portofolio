"use client";

import { useState } from "react";

export const TesInterVIew = () => {
  const [lists, setLists] = useState([]);
  const [listInputValue, setListInputValue] = useState("");

  const handleOnCHange = (e) => {
    setListInputValue(e.target.value);
  };

  const handleAddList = (list) => {
    if (list || list != "") {
      setLists((prev) => [...prev, list]);
    }

    setListInputValue("");
  };

  return (
    <div>
      <div className=" flex flex-col gap-3">
        <h1 className="text-lg text-slate-900 bg-slate-50 font-bold p-4">
          {" "}
          Item List
        </h1>

        <input
          type="text"
          value={listInputValue}
          className=""
          onChange={handleOnCHange}
        />

        <button
          className=" text-slate-900 bg-yellow-500"
          onClick={() => handleAddList(listInputValue)}
        >
          Add
        </button>
      </div>

      <ul className=" bg-slate-50 shadow-md p-4 mt-4 text-slate-900">
        {lists?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
