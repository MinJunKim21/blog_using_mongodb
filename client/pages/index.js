import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Main from '../components/Main';
import TopBar from '../components/TopBar';
import { useRouter } from 'next/router';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { asPath } = useRouter();
  // console.log(router.asPath);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5001/api/posts' + asPath);
      // console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [asPath]);

  return (
    <div>
      <Head>
        <title>Blog with MongoDB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Main posts={posts} />
    </div>
  );
}