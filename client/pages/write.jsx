import Image from 'next/image';
import { RiImageAddLine } from 'react-icons/ri';

function write() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative h-[400px] my-10">
        <Image
          src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
          alt=""
        />
      </div>
      <form>
        <div>
          <h1 className="text-xl font-medium font-poppins">Title</h1>
          <input
            type="text"
            placeholder="Write your title here"
            autoFocus={true}
            className="border rounded-md shadow-sm outline-none ring-gray-300 focus:ring-1 w-full py-3 px-2 mt-2 font-light font-poppins"
          />
        </div>

        <div>
          <h1 className="text-xl font-medium font-poppins mt-5">Story</h1>
          <textarea
            placeholder="What is your story?"
            type="text"
            cols="10"
            className="border font-light outline-none focus:ring-1 rounded-md shadow-sm ring-gray-300 w-full mt-2 py-3 px-2 h-[200px] font-poppins"
          ></textarea>
        </div>

        <div className="flex justify-between my-5 items-center">
          <div className="text-lg border-2 rounded-lg py-2 px-3 border-emerald-400">
            <label
              htmlFor="fileInput"
              className="flex space-x-2 items-center cursor-pointer"
            >
              <RiImageAddLine />
              <span className="font-poppins">Add File</span>
            </label>
            <input type="file" id="fileInput" className="hidden" />
          </div>
          <button className="text-lg font-poppins font-medium text-white rounded-lg py-2 px-3 bg-emerald-400">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default write;
