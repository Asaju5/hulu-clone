import Image from "next/image";
import HeaderItems from "./HeaderItems";
import { AiFillHome, AiFillThunderbolt, AiOutlineSearch } from "react-icons/ai";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-7 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={AiFillHome} />
        <HeaderItems title="TRENDING" Icon={AiFillThunderbolt} />
        <HeaderItems title="SEARCH" Icon={AiOutlineSearch} />
        <HeaderItems title="COLLECTION" Icon={BsCollectionPlayFill} />
        <HeaderItems title="VERIFIED" Icon={MdVerified} />
        <HeaderItems title="ACCOUNT" Icon={FiUser} />
      </div>
      <div className="">
      <p className="text-green-500 font-extrabold text-5xl"> hulu </p>
      </div>
    </header>
  );
}

export default Header;
