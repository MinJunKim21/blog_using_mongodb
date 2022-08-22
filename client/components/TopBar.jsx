import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';
import { Context } from '../context/Context';

function TopBar() {
  // const [user, setUser] = useState(true);
  const { user } = useContext(Context);
  console.log(user);

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
          <Link href={user ? '/' : '/register'}>
            <li>HOME</li>
          </Link>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <Link href={user ? '/write' : '/register'}>
            <li>WRITE</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        {user ? (
          <Link href={user ? '/account' : '/login'}>
            <Image
              src="https://images.unsplash.com/photo-1638588008500-3eb233f987f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
