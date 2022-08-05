import Image from 'next/image';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-[#f4f2f2] m-5 pb-7.5 flex flex-col items-center max-w0 ">
      <div className="flex flex-col items-center whitespace-no-wrap mt-2 p-5">
        <span className="m-3 p-1.5 w-full border-t-[1px] border-b-[1px] border-gray-400 text-center text-md">
          ABOUT ME
        </span>
        <div className="relative w-full h-[300px]  mt-3">
          <Image
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <p className="font-light text-sm pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          laboriosam dolore debitis maxime officiis. Nulla accusamus provident,
          quas corporis doloribus maiores
        </p>

        <span className="mt-8 p-1.5 w-full border-t-[1px] border-b-[1px] border-gray-400 text-center text-md">
          CATEGORIES
        </span>
        <ul className="flex flex-wrap py-5 font-light text-sm pl-4">
          <li className="w-[50%]">Life</li>
          <li className=" w-[50%]">Career</li>
          <li className=" w-[50%]">Education</li>
          <li className="w-[50%]">Vision</li>
          <li className="w-[50%]">Project</li>
          <li className=" w-[50%]">Skill</li>
        </ul>

        <span className="m-3 p-1.5 w-full border-t-[1px] border-b-[1px] border-gray-400 text-center text-md">
          FOLLOW ME
        </span>
        <div className="flex space-x-3 text-xl">
          <FaFacebookSquare className="topIcon" />
          <FaTwitterSquare className="topIcon" />
          <FaPinterest className="topIcon" />
          <FaInstagramSquare className="topIcon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
