//posts.js
//SWR(клієнт)+getServerSideProps(сервер)
import { useState } from "react";
import Link from "next/link";
import useSWR from "swr"; //https://www.setup.pp.ua/2020/06/useswr-react.html
import MainLayout from "../components/MainLayout";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Posts({ serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  // console.log("**** Posts/serverPosts=", serverPosts);
  //*** Загрузка даних на фронтенді */
  // if (typeof window != "undefined") {
  const { data, error } = useSWR(`${process.env.API_URL}/posts`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) {
    return (
      <MainLayout>
        <p>Loading/Завантаження ...</p>
      </MainLayout>
    );
  }
  if (!posts) setPosts(data);
  console.log("posts/posts=", posts);
  //** Кінець Загрузка даних на фронтенді */
  return (
    <MainLayout title="Posts">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const response = await fetch(`${process.env.API_URL}/posts`); //з next.config.js
  const dataS = await response.json();
  return {
    props: { serverPosts: dataS }, // will be passed to the page component as props
  };
}
