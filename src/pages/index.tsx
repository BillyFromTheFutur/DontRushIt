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
          className="relative my-0 h-full w-11/12 gap-12 overflow-hidden rounded-xl bg-transparent bg-opacity-30 py-4 pt-5 text-white  "
        >
          <div
            className={
              "zen-10 h-full w-full self-center overflow-hidden rounded-xl  bg-gray-900 bg-opacity-30 px-4 py-9 shadow-lg  scrollbar-hide "
            }
          >
            <div
              className={
                "absolute z-20 flex h-auto w-full items-center justify-center bg-gradient-to-br from-blue-500/0  to-pink-500/5 align-middle backdrop-blur-sm "
              }
            >
              <ListBoxItem />
            </div>
            <Editor />
          </div>
        </div>
        <footer className=" relative bottom-0 flex w-full flex-row justify-evenly">
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
