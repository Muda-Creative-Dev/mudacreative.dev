import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import { OutlineButton } from "../components/button";
function index() {
  return (
    <>
      <Header />
      <div className="h-[80%] md:h-screen bg-white flex bg-home bg-no-repeat bg-cover">
        <Image
          src="/images/poto.png"
          alt=""
          width={730}
          height={550}
          className="hidden md:block absolute right-0 pt-[93px] items-end justify-end"
        />
        <div className="w-full py-20 px-5 md:w-[80%] mx-auto flex flex-col items-center md:items-start font-poppins z-10 ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center md:text-left  font-bold w-full md:w-[60%] leading-tight">
            We solve problems With code.
          </h1>
          <p className="text-sm font-semibold md:justify-start md:text-xl w-full md:w-[50%] pt-5 pb-20 text-center md:text-left">
            Muda creative{" "}
            <span className="font-normal">
              have an important role in solving environmental problems with
              technology. They have the creativity and skills to develop
              innovative solutions that can help protect the environment
            </span>
          </p>
          <OutlineButton title={"Let's Collaboration"} />
        </div>
      </div>
      <div className="h-screen bg-white mt-10 font-poppins w-full ">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          About
        </h1>
        <div className="flex flex-col md:justify-between md:flex-row md:px-[350px] pt-16">
          <div className="mb-8 md:mb-0">
            <Image
              className="rounded-xl md:rounded-tr-[100px] "
              src="/images/about.png"
              alt="photos about"
              width={580}
              height={400}
            />
          </div>
          <div className="w-full md:w-[526px] h-[341px] md:items-end pr-8">
            <p className="text-base font-semibold md:justify-start md:text-2xl w-full pb-5 text-justify">
              Muda creative
              <span className="font-normal pl-2">
                is a software house technology that focuses on developing
                technology products and services for various needs, both
                business and personal. Muda Creative has a team consisting of
                young people and experienced people in the technology field, who
                are dedicated to creating innovative and useful technology
                solutions.
              </span>
            </p>
            <OutlineButton title={"Let's Collaboration"} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[36px] font-semibold text-center bg-white">
          Our Service
        </h1>
        <div className="flex px-[111px] gap-[27px] bg-white">
          <div>
            <Image src="/icon/logo-ios.png" alt="" width={25} height={25} />
            <Image src="/icon/ios.png" alt="" width={36} height={17} />
            <h2 className="text-[24px] font-semibold">Mobile Application</h2>
            <p>
              Innovative and creative mobile application. Our app uses the
              latest technology to provide a unique and engaging experience.
              Affordable and easy to use mobile application. Our application is
              available at an affordable price and is easy to use for everyone.
            </p>
          </div>
          <div>
            <Image src="/icon/web.png" alt="" width={24} height={24} />
            <h2 className="text-[24px] font-semibold bg-white">
              Web Application
            </h2>
            <p>
              Innovative and creative mobile application. Our app uses the
              latest technology to provide a unique and engaging experience.
              Affordable and easy to use mobile application. Our application is
              available at an affordable price and is easy to use for everyone.
            </p>
          </div>
          <div>
            <Image src="/icon/uiux.png" alt="" width={25} height={25} />
            <h2 className="text-[24px] font-semibold">UI UX Design</h2>
            <p>
              Innovative and creative mobile application. Our app uses the
              latest technology to provide a unique and engaging experience.
              Affordable and easy to use mobile application. Our application is
              available at an affordable price and is easy to use for everyone.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[80%] m-auto my-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="font-poppins font-semibold text-2xl md:text-5xl  text-black tracking-widest ">
            Need Consultation?
          </h1>
          <p className="font-poppins font-medium text-sm md:text-lg text-[#9F9F9F]">
            Let's discuss what projects you have in mind
          </p>
        </div>
        <OutlineButton title={"Let's discuss"} icon={<BsArrowDown />} />
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
              className="w-full md:w-[208px] h-[45px] rounded-xl text-white font-poppins font-medium text-md md:text-xl bg-[#4BBCBF] hover:bg-[#2a6e70] hover:text-[#ffffff] transition duration-500"
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
