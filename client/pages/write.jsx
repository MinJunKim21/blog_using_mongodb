import Image from 'next/image';
import { RiImageAddLine } from 'react-icons/ri';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';

function write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:5001/api/posts/', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(errrrrr);
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative h-[400px] my-10">
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
            alt=""
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="text-xl font-medium font-poppins">Title</h1>
          <input
            type="text"
            placeholder="Write your title here"
            autoFocus={true}
            className="border rounded-md shadow-sm outline-none ring-gray-300 focus:ring-1 w-full py-3 px-2 mt-2 font-light font-poppins"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <h1 className="text-xl font-medium font-poppins mt-5">Story</h1>
          <textarea
            placeholder="What is your story?"
            type="text"
            cols="10"
            className="border font-light outline-none focus:ring-1 rounded-md shadow-sm ring-gray-300 w-full mt-2 py-3 px-2 h-[200px] font-poppins"
            onChange={(e) => setDesc(e.target.value)}
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
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button
            className="text-lg font-poppins font-medium text-white rounded-lg py-2 px-3 bg-emerald-400"
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default write;
