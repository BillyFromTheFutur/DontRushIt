import { type NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Editor from "../components/editor/CodeMirror";
import BasicButton from "./components/Button";
import { Avatar, Dropdown } from "@nextui-org/react";
import ListBoxItem from "../components/editor/ListBoxItem";
import UserMenu from "./components/UserMenu";

const Home: NextPage = () => {
  const lastElement = React.createRef<HTMLDivElement>();
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);
  return (
    <div className=" min-h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Don't rush it !</title>
        <meta
          name="description"
          content="Online friendly competition coding game"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen min-h-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[#100F5B] to-[#155A73] py-5">
        <UserMenu />
        <div className="container flex flex-col items-center justify-start gap-12 rounded-xl  px-4">
          <h1 className="text-xl tracking-tight text-white sm:text-[3rem]">
            DON'T <span className="font-bold text-sky-400 ">RUSH</span> IT !
          </h1>
        </div>

        <div
          style={{
            height: height * 0.85,
          }}
          className="relative mt-5 flex h-full w-11/12 justify-center gap-12 overflow-hidden rounded-xl bg-black bg-opacity-30 shadow-xl scrollbar-hide"
        >
          <div
            className={
              " absolute z-10  flex h-11 w-full items-center justify-center bg-black/5 backdrop-blur-sm "
            }
          >
            <ListBoxItem />
          </div>
          <div className="relative h-auto w-full overflow-y-auto px-5 scrollbar-hide">
            <div className="z-10 h-11  w-full bg-transparent"></div>
            <Editor />

            <div className="z-10 h-5 w-full bg-transparent"></div>
          </div>
        </div>
        <footer className=" relative top-3  flex w-full flex-row justify-evenly">
          <BasicButton
            text="Give up :("
            onClick={() => {}}
            tailwindProps="bg-pink-800 rounded-md"
          />
          <BasicButton
            text="Finish !"
            onClick={() => {}}
            //disabled={true}
            size={"medium"}
            tailwindProps="bg-green-800 rounded-md"
          />
        </footer>
      </main>
    </div>
  );
};

export default Home;
