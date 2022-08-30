import Image from 'next/image';
import Link from 'next/link';

function Post({ post }) {
  const PF = 'http://localhost:5001/images/';
  return (
    <div className="mb-10 w-[385px] mx-3 mt-5">
      <div className="relative h-[280px]">
        {/* {post.photo && (
          <Image
            src={PF + post.photo}
            layout="fill"
            objectFit="cover"
            alt=""
            className="rounded-xl"
          />
        )} */}
      </div>
      <div className="flex flex-col text-center">
        <div className="font-varelaRound text-sm text-[#be9656] mt-4 space-x-4 leading-5">
          {post.categories.map((c) => (
            <span key={c._id}>{c.name}</span>
          ))}
        </div>
        <Link href={`/post/${post._id}`}>
          <span className="inline cursor-pointer font-josefin text-lg font-bold">
            {post.title}
          </span>
        </Link>

        <hr />
        <span className=" text-sm text-gray-400 font-lora mt-4 ">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="font-varelaRound font-lg font-extralight text-gray-400 leading-6 mt-4 overflow-hidden line-clamp-4">
        {post.desc}
      </p>
    </div>
  );
}

export default Post;
