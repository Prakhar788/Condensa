import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { RainbowButton } from "./ui/rainbow-button";
import { FaGithub } from "react-icons/fa6";
import logo from "../public/logo.png"
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-6 lg:left-8 right-6 lg:right-8 py-6 lg:pt-8 pb-0 z-30">
      <div className="w-full border border-gray-200 p-3 lg:p-4 max-w-5xl bg-gray-50/90 backdrop-blur-lg sm:grid flex justify-between sm:grid-cols-3 items-center mx-auto rounded-2xl">
        <Link href={"/"} className="flex items-center gap-2">
<div className="bg-black p-1 rounded-2xl inline-flex items-center justify-center">
  <Image 
    src={logo} 
    alt="Logo"
    height={50}
    width={50}
    className="w-auto h-8 filter brightness-110 drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.9)] transition-all duration-300"
  />

</div>
<p className="font-bold text-2xl md:text-3xl tracking-tight inline-flex items-center">
  
  <span className="text-gray-800 hover:text-gray-600 transition-colors  duration-200  md:text-xl ml-[1px]">Condensa</span>
</p>
        </Link>
        <div className="sm:flex gap-4 items-center"></div>

        <div className="flex justify-end items-center">
        <a href="https://github.com/Prakhar788" target="_blank" rel="noopener noreferrer">
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-black text-white flex items-center space-x-2"
    >
      <span><FaGithub /></span>
    </HoverBorderGradient>
  </a>

        </div>
      </div>
    </nav>
  );
};
