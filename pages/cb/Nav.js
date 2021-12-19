import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BsHeadset, BsSearch } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="">
        <div className="flex bg-emerald-700 items-center justify-between">
          <div className=" lg:mt-5 sm:mt-5 sm:px-7 lg:ml-5 mb-9">
            <p className=" sm:text-lg sm:ml-5 text-gray-200 font-normal text-bold space-x-1 antialiased">
              We can't wait to welcome HSBC customers! Learn about the
              transition and actions to take.
            </p>
          </div>
          <button className="bg-white text-red-600 mr-5 py-3 px-5 font-bold flex items-center">
            Learn More <IoIosArrowForward className="mt-0 font-bold" />
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex mt-3 items-center ml-12 cursor-pointer">
            <Link href="/">
              <Image src="/download.png" alt="image" width={50} height={30} />
            </Link>
            <h2 className="text-emerald-600 text-4xl font-bold pb-2">
              citizens
            </h2>
          </div>
          <div className="flex">
            <div className="flex items-center space-x-5 mt-3 px-10 text-lg text-gray-600">
              <Link href="/">
                <a href="/">
                  <p className="flex items-center ml-2 hover:border-b-2 border-gray-600">
                    <MdLocationPin /> Find a Branch/ATM
                  </p>
                </a>
              </Link>
              <Link href="/">
                <a href="/">
                  <p className="flex items-center hover:border-b-2 border-gray-600">
                    <BsHeadset />
                    Customer Service
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-5 flex justify-between">
        <ul className="flex items-center pt-4 ml-16 cursor-pointer space-x-7 text-gray-700">
          <li className="hover:bg-gray-100">For You</li>
          <li className="hover:bg-gray-100">For Your Business</li>
          <li className="hover:bg-gray-100">Corporate</li>
          <li className="hover:bg-gray-100">Learning</li>
          <li className="hover:bg-gray-100">About Us</li>
        </ul>
        <div className="flex items-center space-x-5 mr-16">
          <div className="flex ml-2 items-center bg-gray-100 p-2 shadow h-8 mt-3">
            <BsSearch className="h-6 text-gray" />
            <input
              className="flex ml-2 items-center bg-transparent outline-none rounded placeholder-gray-800"
              type="text"
              placeholder="How can we help you?"
            />
          </div>
          <div className="flex"> 

            <button className=" bg-red-600 text-zinc-100 px-8 py-1 mt-3 outline-gray-900">Log in</button>
          </div>
        </div>
      </div>

      <div className="flex mt-10 shadow-lg pb-4">
      <ul className="flex text-lg items-center pt-4 ml-16 cursor-pointer space-x-7 text-gray-700">
          <li className=" hover:font-bold">Banking</li>
          <li className="hover:font-bold">Credit Cards</li>
          <li className="hover:font-bold">Home Loans</li>
          <li className="hover:font-bold">Student Loans & Refinancing</li>
          <li className="hover:font-bold">Investing & Retirement</li>
          <li className="hover:font-bold">Auto Loans</li>
          <li className="hover:font-bold">Tools & Resources</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
