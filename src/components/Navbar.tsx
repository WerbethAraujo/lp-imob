"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMennuOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileMennuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center justify-between rounded-lg bg-black py-3">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            alt="logo"
            width={60}
            height={30}
          />
          <span className="text-sm text-white tracking-tight">WAS Imóvel</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <Button variant="outline" className="mr-2 bg-black">
            Sign In
          </Button>
          <Button className="bg-slate-800">Sign Up</Button>
        </div>
        <div className="flex-col justify-end transition-all text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-6">
                <Link
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center text-sm pb-8 text-white lg:hidden">
            <Button variant="outline" className="mr-2 bg-black">
              Sign In
            </Button>
            <Button className="bg-slate-800">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
