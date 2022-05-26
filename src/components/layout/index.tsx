import React from "react";
import Footer from "./footer";
import Header from "./Header";
import Head from "next/head";

const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>theBMWedding</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Signika+Negative&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
