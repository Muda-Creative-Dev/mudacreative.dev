import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { BsArrowDown } from "react-icons/bs";

function index() {
  return (
    <>
      <Header />
      <div class="w-[80%] m-auto my-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="font-poppins font-semibold text-2xl md:text-5xl  text-black tracking-widest ">
            Need Consultation?
          </h1>
          <p className="font-poppins font-medium text-sm md:text-lg text-[#9F9F9F]">
            Let's discuss what projects you have in mind
          </p>
        </div>
        <button className="flex items-center font-poppins font-medium text-sm py-2 my-5 md:text-lg border-2 rounded-lg border-[#414141] text-[#414141] px-4 md:h-14 hover:bg-primary hover:text-[#ffffff] transition duration-500">
          Let’s Discuss
          <div className="pl-6 ">
            <BsArrowDown />
          </div>
        </button>
      </div>
      <div class=" w-full p-10 min-h-screen flex items-center justify-center">
        <div class="text-start w-full md:w-[70%] lg:w-[50%]">
          <h1 class="text-2xl md:text-4xl font-semibold font-poppins pb-8 text-center">
            Contact us
          </h1>
          <div class="pb-4">
            <label
              type="name"
              className="font-poppins font-medium text-md md:text-xl p-2 block"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              class="rounded-xl p-3 w-full border-[#414141] border"
            />
          </div>
          <div class="pb-4 pt-2">
            <label
              type="email"
              className="font-poppins font-medium text-md md:text-xl p-2 block"
            >
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="rounded-xl p-3 w-full border-[#414141] border"
            />
          </div>
          <div class="pb-4 pt-2">
            <label
              type="message"
              className=" font-poppins font-medium text-md md:text-xl p-2 block"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="rounded-xl p-3 w-full border-[#414141] border"
            ></textarea>
          </div>
          <div class="flex py-9 justify-end">
            <button
              type="submit"
              className="w-full md:w-[208px] h-[45px] rounded-xl text-white font-poppins font-medium text-md md:text-xl bg-[#4BBCBF] hover:bg-[#2a6e70] hover:text-[#ffffff]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
