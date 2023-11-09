import Image from 'next/image';
import React from 'react';
import { IoLogoInstagram } from "react-icons/io"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import Link from 'next/link';

function Footer() {
    return (
    <>
        <div className='bg-white bg-footer bg-no-repeat bg-cover p-10'>
            <div className="flex flex-col items-center md:flex-row justify-center md:justify-around space-x-0 text-center ">
                <div className="text-center sm:text-left w-full md:w-[30%]">
                    <h3 className="text-2xl font-poppins font-semibold pb-4">Contact</h3>
                    <div className="flex  flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 hover:text-[#4BBCBF]">
                        <div className="flex items-center">
                            <IoLogoInstagram className="w-6 h-6"/>
                            <p className="font-normal text-sm font-poppins px-2 sm:text-left">mudacreative.Dev</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 py-2 hover:text-[#4BBCBF]">
                        <div className="flex items-center">
                            <FaWhatsapp className="w-6 h-6"/>
                            <p className="font-normal text-sm font-poppins px-2 sm:text-left">+62 812-2284-7970</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 hover:text-[#4BBCBF]">
                        <div className="flex items-center">
                            <AiOutlineMail className="w-6 h-6"/>
                            <p className="font-normal text-sm font-poppins px-2 sm:text-left">mudacreativedev@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={"w-full w-[30%]"}>
                    <h3 className="text-2xl font-poppins font-semibold pb-4 max-sm:py-4">Head Office</h3>
                    <Link href="#" className='hover:text-[#4BBCBF] font-normal text-sm font-poppins'>Jl. Jaya Raga No. 5, Garut, Jawa Barat</Link>
                </div>
                <div className={"w-full md:w-[30%]"}>
                    <h3 class="text-2xl font-poppins font-semibold pb-4 max-sm:py-4">Company</h3>
                        <div class="flex flex-row items-start justify-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <div class="flex flex-col sm:flex-col md:items-center items-start pr-2">
                                <a href="#" className="text-sm font-normal font-poppins hover:text-[#4BBCBF] ">
                                    Home
                                </a>
                                <a href="#" className="text-sm font-normal font-poppins hover:text-[#4BBCBF] py-2">
                                    About
                                </a>
                                <a href="#" className="text-sm font-normal font-poppins hover:text-[#4BBCBF]">
                                    Our Service
                                </a>
                            </div>
                            <div class="flex flex-col md:items-center items-start justify-start pl-2">
                                <a href="#" className="text-sm font-normal font-poppins hover:text-[#4BBCBF] pb-2">
                                    Contact
                                </a>
                                <a href="#" className="text-sm font-normal font-poppins hover:text-[#4BBCBF]">
                                    Portofolio
                                </a>
                            </div>
                        </div>
                </div>
            </div>
            <div className="pt-5 pb-2 text-center font-poppins">
                <div className="flex items-center justify-center py-2">
                    <Image src="/icon/logofooter.png" width={46} height={26} alt="logo footer"/>
                </div>   
                <p className="text-black font-semibold font-poppins text-base">
                    © 2023 Company Profile by 
                    <span className="text-black pl-1 hover:text-[#4BBCBF] hover:cursor-pointer">
                        Muda Creative.dev
                    </span>
                </p>
            </div>
        </div>
    </>
    ); 
}

export default Footer;
