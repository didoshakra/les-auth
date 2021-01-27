//post.js
//useEffect(клієнт)+getInitialProps(сервер)
import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr"; //https://www.setup.pp.ua/2020/06/useswr-react.html
import MainLayout from "../components/MainLayout";

export default function Posts({ serverPosts }) {
  // export default function Posts({ posts }) {
  //*** Загрузка даних на фронтенді */
  const [posts, setPosts] = useState(serverPosts);
  console.log("**** Posts/serverPosts=", serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    }
    //Якщо з сервера нічого не прийшло, то робимо загрузку на фронтенді/запускаєм  load()
    if (!serverPosts) {
      load();
    }
  }, []);

  // Якщо ще нема даних
  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  //** Кінець Загрузка даних на фронтенді */

  return (
    <MainLayout title="Posts">
      <h1>Posts</h1>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
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

Posts.getInitialProps = async (ctx) => {
  // Якщо !req значить ми на фронтенді бо тільки сервер видає reqest
  if (!ctx.req) {
    return { serverPosts: null };
  }
  // getServerSideProps виконується тільки на сервері і перевірка if (!req) не потрібна
  // export async function getServerSideProps(ctx) {
  const response = await fetch(`${process.env.API_URL}/posts`); //з next.config.js
  const dataS = await response.json();
  // console.log("***Posts/getServerSideProps/data=", dataS);
  return { serverPosts: dataS }; //для getInitialProps
  // return {
  //   props: { serverPosts: dataS }, // will be passed to the page component as props
  // };
};
