import Link from "next/link";
import { type IconType } from "react-icons/lib";

interface Props {
  linkProp: string;
  title: string;
  icon: IconType;
  isActive: boolean;
}

const NavBarItem: React.FC<Props> = ({
  linkProp,
  title,
  icon: Icon,
  isActive,
}) => {
  return (
    <li
      className={`m-0 flex h-10 w-full justify-start pl-2  transition duration-300 ease-linear hover:bg-white/10`}
    >
      <Link
        href={linkProp}
        className={`flex flex-row gap-1 ${
          isActive ? "text-white" : "text-gray-300"
        }`}
      >
        <div
          className={` h-1/2 w-1 rounded-lg transition duration-300 ease-linear ${
            isActive ? "scale-75 bg-white" : "scale-0 bg-transparent"
          }`}
        />
        {""}
        <Icon size={21} /> {title}
      </Link>
    </li>
  );
};
export default NavBarItem;
