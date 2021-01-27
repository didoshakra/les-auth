//posts.js
//SWR(клієнт)+getServerSideProps(сервер)
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr"; //https://www.setup.pp.ua/2020/06/useswr-react.html
import MainLayout from "../../components/MainLayout";

const fetcher = (url) => fetch(url).then((r) => r.json());
//

export default function Post({ serverPost }) {
  //*** Загрузка даних на фронтенді */
  const [post, setPost] = useState(serverPost);
  console.log("----Post/post=", post);
  const router = useRouter();
  const { data, error } = useSWR(
    `${process.env.API_URL}/posts/${router.query.id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) {
    return (
      <MainLayout>
        <p>Loading/Завантаження ...</p>
      </MainLayout>
    );
  }
  if (!post) setPost(data);
  console.log("posts/post=", post);
  //** Кінець Загрузка даних на фронтенді */
  return (
    <MainLayout>
      {/* <h1>Post {router.query.id}</h1> */}
      <h1>{post.tittle}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to Posts</a>
      </Link>
    </MainLayout>
  );
}
//*** Загрузка даних на сервері */
export async function getServerSideProps(ctx) {
  const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`); //з next.config.js
  const dataS = await response.json();
  return {
    props: { serverPost: dataS }, // will be passed to the page component as props
  };
}
