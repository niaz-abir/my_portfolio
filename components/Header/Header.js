import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiCommandFill } from "react-icons/ri";
import { RiMenuAddFill } from "react-icons/ri";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className="navbar flex justify-between  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenuAddFill className="h-5 w-5"></RiMenuAddFill>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <Link href="/about" className={`${styles.navMenu} mr-2`}>
              About
            </Link>
            <Link href="/contact" className={`${styles.navMenu} mr-2`}>
              Contact
            </Link>
            <Link href={"/article"} className={`${styles.navMenu} pr-2`}>
              Article
            </Link>
          </ul>
        </div>
        <MdOutlineManageAccounts className="text-accent-400 text-[25px] hidden lg:flex"></MdOutlineManageAccounts>
        <a className="btn btn-ghost normal-case text-xl">Niaz Abir</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link href={"/about"} className={`${styles.navMenu} mr-2`}>
            About
          </Link>
          <Link href={"/contact"} className={`${styles.navMenu} mr-2`}>
            Contact
          </Link>
          <Link href={"/article"} className={`${styles.navMenu} pr-2`}>
            Article
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
