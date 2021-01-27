//about.js
//getInitialProps
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

About.getInitialProps = async (ctx) => {
  // const response = await fetch(`http://localhost:4200/about`);
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return { title: data.title };
};
