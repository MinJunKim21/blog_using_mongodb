import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SinglePost() {
  const router = useRouter();
  const path = router.asPath.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5001/api/posts/${path}`);
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="flex flex-col m-5 ">
      <div className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1608556984704-fa578c96e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between mt-5 items-center ">
        <h1 className="w-[100%] text-center text-3xl font-lora font-nanummyeongjo font-extrabold">
          Lorem ipsum, dolorem!
        </h1>
        <div className="flex space-x-2 mr-3 text-xl">
          <FaRegEdit className="text-[#9cc0da]" />
          <RiDeleteBinLine className="text-[#d59191]" />
        </div>
      </div>

      <div className="mt-7 mb-5 flex justify-between">
        <span className="font-nanummyeongjo">
          Author: <b>MinJ</b>
        </span>
        <span className="font-nanummyeongjo">1 hour ago</span>
      </div>
      <p className="leading-7 font-poppins font-light first-letter:font-normal first-letter:text-3xl first-letter:ml-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odio
        deserunt, est asperiores delectus sed officia nobis et suscipit soluta
        numquam ipsum alias labore, maiores ex optio sit. Natus commodi
        similique, omnis perspiciatis ex, quisquam, modi excepturi nesciunt
        distinctio incidunt assumenda voluptas in vitae animi facere beatae a
        quos eius minima hic laborum fuga veniam obcaecati. Rem consectetur fuga
        velit atque illum accusantium hic aliquam blanditiis, magni eveniet et,
        tempora sed sequi! Consectetur eos totam quisquam minima labore commodi
        ipsa saepe deserunt dignissimos voluptates, aperiam vero sapiente illum
        et blanditiis nostrum pariatur ipsam fugit. Vitae nesciunt eos
        recusandae impedit, ea officiis laborum ipsum dicta illum eius quod quis
        et quidem, deleniti minus. Error consequuntur iure possimus quia
        recusandae provident eos iste doloremque praesentium cum delectus a nemo
        rerum eaque reiciendis id perferendis alias nisi, impedit facere porro.
        Ducimus earum autem natus vel pariatur dolorem, hic voluptatibus magni
        laborum odio quasi dolor delectus fugit nostrum consequatur vitae
        corporis culpa iusto commodi unde sit aperiam itaque? Praesentium cum
        illum libero, hic animi ducimus sapiente culpa? Quo enim eligendi natus
        facere asperiores similique unde voluptatem inventore? A, enim
        repellendus. Illo velit a tenetur. Iste tempora aspernatur soluta sed
        rem laudantium rerum unde voluptas!
      </p>
    </div>
  );
}

export default SinglePost;
