import Link from "next/link";
import MainLayout from "../components/MainLayout";

function Home() {
  return (
    <MainLayout title="Home">
      <h1>Welcome to Next.js!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}

export default Home;
