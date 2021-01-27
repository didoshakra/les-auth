import Link from "next/link";
import MainLayout from "../components/MainLayout";
import classes from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <MainLayout title="About">
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please
        <Link href="/">
          <a>Go back</a>
        </Link>
        to safety
      </p>
    </MainLayout>
  );
}
