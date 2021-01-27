//about.js
//getStaticProps
import React from "react";
import Router from "next/router"; //Для програмної маршрутизації не через Link

import MainLayout from "../components/MainLayout";

export default function About({ title }) {
  const lincClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title="About">
      <h1>{title}</h1>
      <button onClick={lincClickHandler}>Go back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go back to Posts</button>
    </MainLayout>
  );
}

// export async function getServerSideProps(ctx) {
export async function getStaticProps(ctx) {
  const response = await fetch(`${process.env.API_URL}/about`); //з next.config.js
  const data = await response.json();
  return {
    props: { title: data.title }, // will be passed to the page component as props
  };
}
