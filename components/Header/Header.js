import Link from "next/link";
import { RiMenuAddFill } from "react-icons/ri";
import working17 from "../../public/Animation3 (1).json";

import Lottie from "lottie-react";
const Header = () => {
  return (
    <div className="flex justify-between text-white  shadow-md navbar shadow-[#231427]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenuAddFill className="w-5 h-5"></RiMenuAddFill>
          </label>

          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            <Link
              href={"/about"}
              className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
            >
              About
              <hr className="border-t-2 border-[#4a2453]"></hr>
            </Link>

            <Link
              href="#project"
              className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
            >
              project
              <hr className="border-t-2 border-[#4a2453]"></hr>
            </Link>
            <Link
              href={"/article"}
              className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
            >
              Article
              <hr className="border-t-2 border-[#4a2453]"></hr>
            </Link>
            <div className="mt-6">
              <Link
                href="/"
                className="px-4 py-3 mt-2 ml-2 hover:bg-[#4a2453] duration-300 border border-[#4a2453] "
              >
                <button className="font-bold">Lets Connect</button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="flex items-center ">
          <div>
            <Lottie
              className="w-16 lg:w-24"
              animationData={working17}
              loop={true}
            ></Lottie>
          </div>
          <div>
            <a className=" hidden mt-8 lg:block lg:text-[1.4rem] normal-case btn btn-ghost font-primary">
              Niaz Abir
            </a>
          </div>
          <a className="block lg:hidden mt-8 lg:text-[1.4rem] normal-case btn btn-ghost font-primary">
            Niaz Abir
          </a>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <Link
            href={"/about"}
            className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
          >
            About
            <hr className="border-t-2 border-[#4a2453]"></hr>
          </Link>

          <Link
            href="#project"
            className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
          >
            project
            <hr className="border-t-2 border-[#4a2453]"></hr>
          </Link>
          <Link
            href={"/article"}
            className="pl-4 text-[18px] hover:bg-[#231427] pt-2 duration-300 capitalize font-semibold pr-4"
          >
            Article
            <hr className="border-t-2 border-[#4a2453]"></hr>
          </Link>
        </ul>

        <div>
          <Link
            href="#connect"
            className="px-4 py-3 mt-2 ml-2 hover:bg-[#4a2453] duration-300 border border-[#4a2453] "
          >
            <button className="font-bold">Lets Connect</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
