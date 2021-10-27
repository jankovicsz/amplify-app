import React from "react";
import Navbar from "./Navbar";
import Home from "../components/Home";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </>
  );
};

export default Layout;
