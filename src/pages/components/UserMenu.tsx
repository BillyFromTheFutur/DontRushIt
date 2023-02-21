import { Avatar } from "@nextui-org/react";
import React from "react";

const UserMenu = () => {
  return (
    <div className="absolute top-3 right-14 flex h-14 w-36 flex-row items-center justify-evenly rounded-lg bg-white/5 backdrop-blur-lg transition  delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-white/20">
      <Avatar
        className="h-10"
        squared
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />

      <p className="text-white">UserName</p>
    </div>
  );
};
export default UserMenu;
