import { type NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
//import { useEffect } from "react";
//import { FaQuestion } from "react-icons/fa";
//import { number } from "zod";
//import Link from "next/link";
//import { signIn, signOut, useSession } from "next-auth/react";

//import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const lastElement = React.createRef<HTMLDivElement>();
  const topElement = React.createRef<HTMLDivElement>();
  const [imaginary, setImaginary] = useState<number>(1);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);
  return (
    <div className="min-h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Don't rush it !</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[#100F5B] to-[#155A73] py-5">
        <div className="container flex flex-col items-center justify-start gap-12 rounded-xl  px-4">
          <h1 className="text-xl tracking-tight text-white sm:text-[3rem]">
            DON'T{" "}
            <span className="font-bold text-[hsl(280,100%,70%)]">RUSH</span> IT
            !
          </h1>
        </div>

        <div
          style={{
            height: height * 0.79,
          }}
          className=" relative my-8 w-11/12  gap-12 overflow-hidden rounded-xl bg-gray-900 py-4 px-4  text-white opacity-80"
        >
          <div
            className={
              "absolute bottom-0 right-0 z-10 h-10 w-28 content-center items-center justify-center rounded-tl-lg bg-gray-900"
            }
          >
            <button
              onClick={() => {
                lastElement.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={"py-1 px-2"}
            >
              Scroll Down
            </button>
          </div>
          <div
            className={
              "absolute flex h-8 w-full items-center justify-center  align-middle "
            }
          >
            <div className={"h-full w-28  rounded-b-lg bg-gray-700 opacity-70"}>
              <p className={"z-10 text-center text-lg text-white"}>
                ⚛️Index.ts
              </p>
            </div>
            <div className={"absolute right-8 top-0"}>
              <button
                onClick={() => {}}
                className={`h-8 rounded-bl-lg rounded-tr-lg bg-green-500 px-4 py-1 text-white`}
              >
                Finish !
              </button>
            </div>
          </div>

          <div
            className={
              "  h-full w-full self-center overflow-y-auto rounded-lg bg-gray-800 p-4 scrollbar-hide"
            }
          >
            <button
              onClick={() => {
                setImaginary(imaginary + 1);
              }}
              className={`rounded-md bg-blue-500 px-4 py-2 text-white`}
            >
              click-me
            </button>
            {Array.from({ length: imaginary }).map((_, index) => (
              <div
                key={index}
                ref={lastElement}
                className={
                  "my-4 h-8 w-24 items-center rounded-md bg-pink-200 text-center"
                }
              >
                <p className="text-black">Imaginary !</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
//      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#100F5B] to-[#1d8bb4] py-5">
//       <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] py-5">

/*
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

 *           <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
*/
