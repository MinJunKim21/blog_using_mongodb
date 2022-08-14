import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function SinglePost() {
  const router = useRouter();
  const path = router.asPath.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5001/api/posts/${path}`);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="flex flex-col m-5 ">
      <div className="relative h-[300px]">
        {post.photo && (
          <Image
            src={post.photo}
            alt=""
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex justify-between mt-5 items-center ">
        <h1 className="w-[100%] text-center text-3xl font-lora font-nanummyeongjo font-extrabold">
          {post.title}
        </h1>
        <div className="flex space-x-2 mr-3 text-xl">
          <FaRegEdit className="text-[#9cc0da]" />
          <RiDeleteBinLine className="text-[#d59191]" />
        </div>
      </div>

      <div className="mt-7 mb-5 flex justify-between">
        <span className="font-nanummyeongjo">
          Author:{' '}
          <Link href={`/?user=${post.username}`}>
            <b className="cursor-pointer text-xl font-bold">{post.username}</b>
          </Link>
        </span>
        <span className="font-nanummyeongjo">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="leading-7 font-poppins font-light first-letter:font-normal first-letter:text-3xl first-letter:ml-3">
        {post.desc}
      </p>
    </div>
  );
}

export default SinglePost;
