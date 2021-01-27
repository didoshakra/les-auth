//post
//useEffect(клієнт)+getInitialProps(сервер)
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import MainLayout from "../../components/MainLayout";
//

export default function Post({ serverPost }) {
  //*** Загрузка даних на фронтенді */
  const [post, setPost] = useState(serverPost);
  console.log("----Post/post=", post);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const response = await fetch(
        // `http://localhost:4200/posts/${router.query.id}`
        `${process.env.API_URL}/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    //Якщо з сервера нічого не прийшло, то робимо загрузку на фронтенді/запускаєм  load()
    if (!serverPost) {
      load();
    }
  }, []);

  // Якщо ще нема даних
  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
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
Post.getInitialProps = async ({ query, req }) => {
  // Якщо !req значить ми на фронтенді бо тільки сервер видає reqest
  // export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { serverPost: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const dataS = await response.json();
  console.log("***[id]/dataS=", dataS);
  return { serverPost: dataS }; //для getInitialProps
  // return {
  //   props: { serverPost: dataS }, // will be passed to the page component as props
  // };
};
