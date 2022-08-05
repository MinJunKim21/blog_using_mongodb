import Image from 'next/image';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';

function TopBar() {
  return (
    <div className="w-full h-12  font-[josefin] top-0 flex items-center justify-between max-w-7xl sticky mx-auto text-xl z-50 bg-white">
      <div className="flex gap-2 ml-5">
        <FaFacebookSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
        <FaPinterest className="topIcon" />
        <FaInstagramSquare className="topIcon" />
      </div>
      <div>
        <ul className="flex gap-5 font-light justify-center ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          width={35}
          height={35}
          objectFit="cover"
          className="rounded-full"
          alt=""
        />
        <FaSearch className="text-lg text-[#666] cursor-pointer ml-3 mr-5 " />
      </div>
    </div>
  );
}

export default TopBar;
