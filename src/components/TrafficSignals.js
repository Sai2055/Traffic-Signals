import { useEffect, useState } from "react";

export default function TrafficSignals() {
  const [activeColor, setActiveColor] = useState("red");
  useEffect(() => {
    let timer;

    if (activeColor === "red") {
      timer = setTimeout(() => setActiveColor("green"), 4000);
    } else if (activeColor === "green") {
      timer = setTimeout(() => setActiveColor("yellow"), 3000);
    } else if (activeColor === "yellow") {
      timer = setTimeout(() => setActiveColor("red"), 1500);
    }
    return () => clearTimeout(timer);
  }, [activeColor]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl py-4">Traffic Signal</div>
      <div className="flex flex-col gap-3 bg bg-black border border-black py-10 px-4 items-center">
        <div
          className={`border border-black p-6 rounded-3xl ${
            activeColor === "green" ? "bg bg-green-500" : "bg bg-gray-400"
          }`}
        ></div>
        <div
          className={`border border-black p-6 rounded-3xl ${
            activeColor === "yellow" ? "bg bg-yellow-500" : "bg bg-gray-400"
          }`}
        ></div>
        <div
          className={`border border-black p-6 rounded-3xl ${
            activeColor === "red" ? "bg bg-red-500" : "bg bg-gray-400"
          }`}
        ></div>
      </div>
      <div className="border border-black p-1  w-[16px] h-[100px] bg bg-gray-500"></div>
    </div>
  );
}
