import { type NextPage } from "next";
import React, { useEffect, useState } from "react";

const Topics: NextPage = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className=" max-h-screen overflow-hidden bg-gray-100">
      <main className="flex max-h-screen min-h-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[#100F5B] to-[#155A73] py-5">
        <div
          className="  rounded-lg bg-gradient-to-b from-black/30 to-gray-800/40  shadow-md"
          style={{ minWidth: width! * 0.75, minHeight: height! * 0.9 }}
        >
          <p>ikuzo</p>
        </div>
      </main>
    </div>
  );
};
export default Topics;
