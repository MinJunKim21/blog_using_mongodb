import Image from 'next/image';

function Post() {
  return (
    <div className="mb-10 w-[385px] mx-3 mt-5">
      <div className="relative h-[280px]">
        <Image
          src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
          layout="fill"
          objectFit="cover"
          alt=""
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col text-center">
        <div className="font-varelaRound text-sm text-[#be9656] mt-4 space-x-4 leading-5">
          <span>Development</span>
          <span>Design</span>
        </div>
        <span className="font-josefin text-lg font-bold">
          This is going to be a title
        </span>
        <hr />
        <span className=" text-sm text-gray-400 font-lora mt-4 ">
          1 hour ago
        </span>
      </div>
      <p className="font-varelaRound font-lg font-extralight text-gray-400 leading-6 mt-4 overflow-hidden line-clamp-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        corrupti consectetur repellat atque veritatis repudiandae sequi optio ex
        debitis iste?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Dolorem corrupti consectetur repellat atque veritatis repudiandae sequi
        optio ex debitis iste?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Dolorem corrupti consectetur repellat atque veritatis
        repudiandae sequi optio ex debitis iste?
      </p>
    </div>
  );
}

export default Post;
