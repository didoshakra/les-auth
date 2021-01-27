// pages/_app.js
import "../styles/main.css";
//  В першу чергу приміняються стилі з /style jsx global/, а потім імпортовані import "../styles/main.css";
import NextNprogress from "nextjs-progressbar"; //Індикатор загрузки

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />

      {/* <style jsx global>{`
          body {
            font-family: "Roboto", sans-serif;
          }
      `}</style> */}
    </>
  );
}
