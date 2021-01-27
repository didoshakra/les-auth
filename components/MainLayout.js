import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const MainLayout = ({ children, title = "" }) => (
  <>
    <Head>
      <title>{title} | Next.js Lesson</title>
      {/* не використовується з 2020 року */}
      <meta name="keywords" content="next, JavaScript, ключевое слово 3" />
      <meta name="description" content="це є урок по Next.js" />
      <meta charset="utf-8" />
    </Head>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Header />
    </nav>
    <main>{children}</main>
    <style jsx>{`
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      a {
        color: #0dec97;
        text-decoration: none;
        font-size: 13px;
      }
      main {
        margin-top: 60px;
      }
    `}</style>
  </>
);
export default MainLayout;
