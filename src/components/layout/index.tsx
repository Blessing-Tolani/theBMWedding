import React from "react";
import Footer from "./footer";
import Header from "./Header";
import Head from "next/head";

const PageLayout = (props: { children; title }) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Signika+Negative&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/bm-icon-2.png" />
      </Head>
      <Header />
      {props.children}
      <Footer text="RSVP: 08060430001, 07066185225, 08134942551, 08064588676" />
    </>
  );
};

export default PageLayout;
