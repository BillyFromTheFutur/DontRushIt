import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import NavBar from "./components/NavBar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <div className=" max-h-screen overflow-hidden">
          <Head>
            <title>Don&apos;t rush it !</title>
            <meta
              name="description"
              content="Online friendly competition coding game"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex max-h-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[#100F5B] to-[#155A73] py-5">
            <NavBar />
            <Component {...pageProps} />
          </main>
        </div>
      </SessionProvider>
    </NextUIProvider>
  );
};

export default api.withTRPC(MyApp);
