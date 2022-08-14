import Image from 'next/image';

function Banner() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative font-garamond mt-[60px] flex flex-col justify-center items-center text-[#444]">
        <span className="absolute text-2xl">React & Node</span>
        <span className="absolute top-[0px] text-[100px]">Blog</span>
      </div>

      <div className="mt-[60px] -z-[50] relative h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1604542031658-5799ca5d7936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          layout="fill"
          priority={true}
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
