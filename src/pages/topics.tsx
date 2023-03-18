import { type NextPage } from "next";
import React, { useEffect, useState } from "react";

const Topics: NextPage = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="max-h-screen  bg-gray-100">
      <main className="flex max-h-screen  flex-col items-center justify-start  bg-gradient-to-b from-[#100F5B] to-[#155A73] py-5">
        <div
          className="inline-grid grid-cols-5 gap-2 rounded-lg bg-gradient-to-b from-black/30 to-gray-800/40 p-2 shadow-md"
          style={{
            minWidth: width * 0.75,
            height: height * 0.9,
          }}
        >
          <div className="col-span-1 rounded-md bg-gray-500/90 px-2 shadow-sm transition delay-150 duration-300 hover:scale-101 hover:bg-gray-500 hover:shadow-xl">
            <p>yes</p>
          </div>

          <div className=" col-span-4  overflow-auto rounded-md scrollbar-hide">
            <div className=" h-full w-full bg-red-400"></div>
            <div className=" h-10 w-full overflow-hidden rounded-b-lg bg-pink-500"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Topics;
