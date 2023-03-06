import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";

const UserMenu = () => {
  return (
    <button
      onClick={() => {
        console.log("yes bebe");
      }}
    >
      <div className="absolute top-3 right-3 flex h-14 w-36 flex-row items-center justify-evenly rounded-md bg-white/5 shadow-xl backdrop-blur-lg transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-white/20">
        <Avatar
          className="h-10"
          squared
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />

        <p className="text-white">UserName</p>
      </div>
    </button>
  );
};

export default UserMenu;
