import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';
import { Context } from '../context/Context';

function TopBar() {
  const [loggedin, setLoggedin] = useState(false);
  const { user } = useContext(Context);

  //user?이면 loggedin=true, 아니면 반대를 설정해두기

  useEffect(() => {
    setLoggedin(true);
  }, [user]);

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
          <Link href={loggedin ? '/' : '/register'}>
            <li>HOME</li>
          </Link>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <Link href={loggedin ? '/write' : '/register'}>
            <li>WRITE</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        {loggedin && user ? (
          <Link href="/account">
            <Image
              src={user.profilePic}
              width={35}
              height={35}
              objectFit="cover"
              className="rounded-full cursor-pointer"
              alt=""
            />
          </Link>
        ) : (
          <div className="text-sm font-poppins space-x-2 ">
            <Link href="/login">
              <span className="cursor-pointer">Log in</span>
            </Link>
            <span>/</span>
            <Link href="/register">
              <span className="cursor-pointer">Sign Up</span>
            </Link>
          </div>
        )}
        <FaSearch className="text-lg text-[#666] cursor-pointer ml-5 mr-5 " />
      </div>
    </div>
  );
}

export default TopBar;
