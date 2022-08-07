import Image from 'next/image';
import { IoIosCamera } from 'react-icons/io';
import Sidebar from '../components/Sidebar';

function account() {
  return (
    <div className="flex max-w-4xl mt-10 space-x-8 mx-auto">
      <div className="w-2/3 mx-auto flex flex-col">
        <h1 className="text-3xl font-semibold font-poppins text-gray-600 mt-5">
          Update Your Account
        </h1>

        <div className="mx-auto my-[80px]">
          <div className="flex items-baseline">
            <Image
              src="https://images.unsplash.com/photo-1638588008500-3eb233f987f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              objectFit="cover"
              alt=""
              height={150}
              width={150}
              className="rounded-full -z-10 "
            />
            <div className="z-50 cursor-pointer">
              <label htmlFor="profilePic" className="z-50">
                <IoIosCamera className="ml-[-30px] mb-[10px] text-4xl z-50 bg-gray-300 rounded-full  border-[3px]  border-white" />
              </label>
              <input type="file" id="profilePic" className="hidden" />
            </div>
          </div>
          <h2 className="text-center mt-3 font-poppins text-sm">
            Profile Picture
          </h2>
        </div>

        <form>
          <h2 className="text-xl font-medium font-poppins">Username</h2>
          <input
            type="text"
            placeholder="Minjun Kim"
            className=" border-b-2 font-light outline-none focus:ring-1   ring-gray-300 w-full mb-7 mt-1 px-2 font-poppins rounded-md"
          />
          <h2 className="text-xl font-medium font-poppins">Email</h2>
          <input
            type="email"
            placeholder="Minjun@coding.com"
            className="border-b-2 font-light outline-none focus:ring-1   ring-gray-300 w-full mb-7 mt-1 px-2 font-poppins rounded-md"
          />
          <h2 className="text-xl font-medium font-poppins">Password</h2>
          <input
            type="password"
            placeholder="*******"
            className="border-b-2 font-light outline-none focus:ring-1   ring-gray-300 w-full mb-7 mt-1 px-2 font-poppins rounded-md"
          />
        </form>

        <div className="space-x-5 mx-auto mt-8">
          <button className="text-lg font-poppins font-medium text-white rounded-lg py-2 px-3 bg-emerald-400">
            Update
          </button>
          <button className="text-lg border-2 rounded-lg py-2 px-3 border-emerald-400">
            Delete Account
          </button>
        </div>
      </div>

      <div className="w-1/3">
        <Sidebar />
      </div>
    </div>
  );
}

export default account;
