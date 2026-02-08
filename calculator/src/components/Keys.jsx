import React from "react";

export default function Keys(props) {
  const { label, key, keyClass } = props;
  const equalsClass =
    "col-[span_2] bg-orange-400 text-[#1a261a] font-semibold hover:bg-orange-500";
  return (
    <div
      className={`bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742] ${keyClass && equalsClass}`}
    >
      <button key={key}>{label}</button>
    </div>
  );
}
