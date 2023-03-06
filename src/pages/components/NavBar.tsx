import NavBarItem from "./NavBarItem";
import { BiHomeAlt } from "react-icons/bi";
import { TbDeviceGamepad } from "react-icons/tb";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <ol className="  absolute top-14 left-0 z-20 flex h-min w-28  list-none flex-col overflow-hidden rounded-lg bg-black/10 p-0 shadow-xl backdrop-blur-sm transition delay-150 duration-300 ease-in-out   hover:bg-black/20">
      <NavBarItem
        linkProp="/"
        title="Home"
        icon={BiHomeAlt}
        isActive={router.pathname == "/"}
      />
      <NavBarItem
        linkProp="/game"
        title="Games"
        icon={TbDeviceGamepad}
        isActive={router.pathname == "/game"}
      />
      <NavBarItem
        linkProp="/topics"
        title="Topics"
        icon={BiHomeAlt}
        isActive={router.pathname == "/topics"}
      />
    </ol>
  );
};
export default NavBar;
