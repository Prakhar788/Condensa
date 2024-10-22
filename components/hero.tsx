"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Highlight,HeroHighlight } from "./ui/hero-highlight";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";

const Hero = () => (
  <div className="pt-10 md:pt-20 px-6 lg:px-0">
    <div className="text-gray-600 flex items-center gap-x-1.5 text-2xl   px-3 py-1.5 mx-auto w-fit mb-8">
    <Link 
      href="https://www.producthunt.com/posts/condensa?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-condensa" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=527316&theme=dark"
        alt="Condensa - Maximize Moments: Condensed Videos, Uncompromised Quality | Product Hunt"
        width={200}
        height={54}
      />
    </Link>
    </div>
    {/* <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-7xl lg:font-semibold text-gray-900 text-balance">
    Condense Videos
    </h1> */}
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Resize. Share. 
        <Highlight className="text-black dark:text-white">
         Shine.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    <h2 className="sm:text-lg max-w-xl mx-auto text-gray-500 text-center mt-9">
      Eliminate oversized files! Reduce video size by <span>90%</span> without
      sacrificing quality, all while working offline.
    </h2>
    <div className="flex gap-4 items-center justify-center mt-10 mb-10">
      <Link
       
        href={"/video"}
      >
        <RainbowButton>Get Started</RainbowButton>
        
      </Link>
    </div>
  </div>
);

export default Hero;
