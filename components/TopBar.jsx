import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';

function TopBar() {
  return (
    <div className="w-full h-12  font-poppins font-light top-0 flex items-center justify-between max-w-7xl sticky mx-auto text-xl z-50 bg-white">
      <div className="flex gap-3 ml-5">
        <FaFacebookSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
        <FaPinterest className="topIcon" />
        <FaInstagramSquare className="topIcon" />
      </div>
      <div>
        <ul className="flex gap-5 font-light justify-center cursor-pointer ">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <Link href="/write">
            <li>WRITE</li>
          </Link>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="flex items-center">
        <Link href="/account">
          <Image
            src="https://images.unsplash.com/photo-1638588008500-3eb233f987f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            width={35}
            height={35}
            objectFit="cover"
            className="rounded-full cursor-pointer"
            alt=""
          />
        </Link>
        <FaSearch className="text-lg text-[#666] cursor-pointer ml-4 mr-5 " />
      </div>
    </div>
  );
}

export default TopBar;
