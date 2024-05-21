"use client";

import Link from "next/link";
import Image from "next/image";

import SlideButton from "./SlideButton";
import { headerLinks } from "@/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [opacity, setOpacity] = useState("bg-opacity-0");

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setOpacity("bg-opacity-0");
    } else {
      setOpacity("bg-opacity-90");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "transition duration-500 bg-zinc-950 fixed top-0 z-50 w-full " + opacity
      }
    >
      <div className="flex flex-col justify-center items-stretch">
        <div className="flex flex-row justify-between items-center px-10 py-2">
          <Link href="/shop">
            <span className="text-white text-xl tracking-widest">
              AUTO BEN'S
            </span>
          </Link>
          <Link href="/">
            <Image
              src="/images/auto-bens-logo.png"
              alt="logo"
              width={80}
              height={50}
            />
          </Link>
          <Link href={'/shop/cars'}>
            <SlideButton
              title="NOS VEHICULES"
              styles="sm:block hidden text-white border-yellow-500 bg-yellow-500 hover:bg-transparent hover:text-yellow-500"
            />
          </Link>
        </div>
        <nav className="sm:flex flex-row justify-center text-white text-xl tracking-tighter italic hidden">
          {headerLinks.map((title) => (
            <Link key={title.title} href={title.link}>
              <div className="transition text-center p-4 hover:text-yellow-500">
                {title.title}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
