import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

function index() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex ">
        <Image src="/images/gradien.png" alt="" width={1400} height={1000} className="absolute"/>
        <Image src="/images/poto.png" alt="" width={730} height={550} className="absolute right-0 pt-[93px] items-end justify-end"/>
        <div className="pt-[130px] pl-[75px] font-poppins">
          <h1 className="text-[64px] font-bold ">We solve problems</h1>
          <h1 className="text-[64px] font-bold ">With code. </h1>
          <div className="leading-3 font-normal">
          <p className="text-sm my-2">Muda creative have an important role in solving </p>
          <p className="text-sm my-2">environmental problems with technology. They have the </p>
          <p className="text-sm my-2">creativity and skills to develop innovative solutions that can</p>
          <p className="text-sm my-2 pb-[37px]"> help protect the environment</p>
          </div>
          <button className="rounded-lg p-1 border border-black  ">Lets collebboration</button>
        </div>
      </div>
      <div className="h-screen w-full bg-white">
        <h1 className="text-[#4BBCBF] text-[36px] text-center">About</h1>
        <div className="flex pl-[91px] pr-[111px] gap-[41px] pt-[65px]">
          <div>
          <Image src="/images/poto-about.png" alt="" width={511} height={341} /> 
          </div>
          <div className="w-[526px] h-[341px] text-justify">
            <p className="pb-[20px]">
            Muda Creative is a software house technology that focuses on developing technology products and services for various needs, both business and personal. Muda Creative has a team consisting of young people and experienced people in the technology field, who are dedicated to creating innovative and useful technology solutions.
            </p>
            <button className="rounded-lg p-1 border border-black  ">Lets collebboration</button>
          </div>

        </div>
      </div>
      <div>
        <h1 className="text-[36px] font-semibold text-center bg-white">OUR SERVICE</h1>
        <div className="flex px-[111px] gap-[27px] bg-white">
          <div>
          <Image src="/icon/logo-ios.png" alt="" width={25} height={25} /> 
          <Image src="/icon/ios.png" alt="" width={36} height={17} /> 
            <h2 className="text-[24px] font-semibold">Mobile Application</h2>
            <p>Innovative and creative mobile application. Our app uses the latest technology to provide a unique and engaging experience. Affordable and easy to use mobile application. Our application is available at an affordable price and is easy to use for everyone.</p>

          </div>
          <div>
          <Image src="/icon/web.png" alt="" width={24} height={24} /> 
            <h2 className="text-[24px] font-semibold bg-white">Web Application</h2>
            <p>Innovative and creative mobile application. Our app uses the latest technology to provide a unique and engaging experience. Affordable and easy to use mobile application. Our application is available at an affordable price and is easy to use for everyone.</p>

          </div>
          <div>
          <Image src="/icon/uiux.png" alt="" width={25} height={25} /> 
            <h2 className="text-[24px] font-semibold">UI UX Design</h2>
            <p>Innovative and creative mobile application. Our app uses the latest technology to provide a unique and engaging experience. Affordable and easy to use mobile application. Our application is available at an affordable price and is easy to use for everyone.</p>

          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
