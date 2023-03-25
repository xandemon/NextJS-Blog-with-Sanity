import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "../assets/Profile Edited Ready.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={ProfilePicture}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>SANDESH WRITES.</h1>
      </div>
      <div>
        <Link
          href="https://sandeshkatwal.com.np"
          className="flex items-center px-5 py-3 text-sm text-center bg-gray-900 rounded-full md:text-base text-primary"
        >
          Visit Sandesh's Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
