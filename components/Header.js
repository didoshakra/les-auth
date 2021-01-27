import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [session, loading] = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className="header">
      <Link href="/">
        <a className="logo">NextAuth.js</a>
      </Link>
      <div className={styles.user}>
        {loading && <div className={styles.title}>Loading...</div>}
        {session && (
          <>
            {/* {" "} */}
            {/* <p style={{ marginBottom: "10px" }}> */}
            <p>
              {/* {" "} */}
              Welcome, {session.user.name ?? session.user.email}
              <img src={session.user.image} alt="" className={styles.avatar} />
            </p>
            {/* {" "} */}
          </>
        )}
        {!session && (
          <>
            <p className={styles.title}>
              Please Sign in
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                // src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif"
                alt=""
                className={styles.avatar}
              />
            </p>
          </>
        )}
      </div>
      {session && (
        <a href="/" onClick={handleSignout} className="btn-signin">
          Sign out/Вийти
        </a>
      )}
      {!session && (
        <a href="/" onClick={handleSignin} className="btn-signin">
          Sign in/Вхід
        </a>
      )}
    </div>
  );
}
