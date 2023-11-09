import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function index() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Muda Creative</h1>
          <p className="text-xl my-2">Development</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
