import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import Editor from "../components/editor/CodeEditor";
import BasicButton from "./components/Button";
import ListBoxItem from "../components/editor/ListBoxItem";
import UserMenu from "./components/UserMenu";
import { ArrowButton } from "../components/arrowButton";
import { api } from "../utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
//import Editor from "@monaco-editor/react";
//import { useBearStore } from "./store/user";

const Game: NextPage = () => {
  //const result = api.example.hello.useQuery({ text: "yes bebe" });
  //const userRouter = api.user.create();
  const lastElement = React.createRef<HTMLDivElement>();
  const firstElement = React.createRef<HTMLDivElement>();
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);
  /*
    *   const increasePopulation: unknown = useBearStore(
    (state) => state.increasePopulation
  );
  const currentPopulation: unknown = useBearStore((state) => state.bears);
*/
  return (
    <div className="flex max-h-screen  w-10/12 flex-col items-center justify-start ">
      <UserMenu />
      <div className="container flex flex-col items-center justify-start gap-12 rounded-xl  px-4">
        <h1 className="text-xl tracking-tight text-white sm:text-[3rem]">
          DON&apos;T <span className="font-bold text-sky-400 ">RUSH</span> IT !
        </h1>
      </div>
      <div
        style={
          height != null
            ? {
                height: height * 0.8,
              }
            : {}
        }
        className="relative mt-5 flex h-full w-11/12 justify-center gap-12 overflow-hidden rounded-xl bg-black bg-opacity-20 shadow-xl scrollbar-hide"
      >
        <ArrowButton
          arrowDown={() => {
            firstElement.current?.scrollIntoView({ behavior: "smooth" });
          }}
          arrowTop={() => {
            lastElement.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <div
          className={
            " absolute z-10 flex h-11 w-full items-center justify-center bg-black/0 backdrop-blur-sm"
          }
        >
          <ListBoxItem />
        </div>
        <div className="relative h-auto w-full overflow-y-auto px-5 scrollbar-hide">
          <div
            ref={firstElement}
            className="z-10 h-11  w-full bg-transparent"
          ></div>
          <div>
            <Editor />
          </div>
          <div
            ref={lastElement}
            className="z-10 h-5 w-full bg-transparent"
          ></div>
        </div>
      </div>
      <footer className=" relative top-3  flex w-full flex-row justify-evenly">
        <BasicButton
          text="Give up :("
          onClick={() => {
            console.log("nothing");
          }}
          tailwindProps="bg-pink-800 rounded-md"
        />
        <BasicButton
          text="Finish !"
          onClick={() => {
            console.log("nothing");
          }}
          //disabled={true}
          size={"medium"}
          tailwindProps="bg-green-800 rounded-md"
        />
      </footer>
    </div>
  );
};

export default Game;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {sessionData && <span>it is what it is {sessionData.user.image}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
