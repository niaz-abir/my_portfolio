import { AiFillGithub } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
const Connect = () => {
  return (
    <div
      className=" text-white  text-2xl mb-18  lg:max-w-[40rem] mb-32"
      id="connect"
    >
      <div>
        <h1 className="text-4xl font-bold text-accent-400">
          Dont be a stranger{" "}
        </h1>
        <h1 className="text-1xl">Connect with me online</h1>

        <div className="grid grid-cols-2 lg:grid-cols-2 max-w-[20rem] items-center mt-4">
          <Link
            href={"https://github.com/niaz-abir"}
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <AiFillGithub className="text-[#FF8DC7]"></AiFillGithub>
            <h1>Github</h1>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/niaz-uddin-abir/"}
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <AiFillLinkedin className="text-[#0077B5]"></AiFillLinkedin>
            <h1>Linkedin</h1>
          </Link>
          <div className="flex flex-row items-center gap-2">
            <ImTwitter className="text-[#674188]"></ImTwitter>
            <h1>Twitter</h1>
          </div>

          <Link
            href={"https://www.facebook.com/profile.php?id=100078852913727"}
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <BsFacebook className="text-[#82AAE3]"></BsFacebook>
            <h1>Facebook</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
