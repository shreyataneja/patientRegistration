import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="assets/logo_uniweb.svg" /> */}
      </Head>
 
<Navbar></Navbar>
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">{children}</main>
      
    </div>
  );
}
