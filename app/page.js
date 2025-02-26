'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import heroGif from '@/public/assests/HeroGif.gif'
import logo from '@/public/assests/logo.png'
import { TfiLayoutAccordionList } from "react-icons/tfi";
import UpperNav from "@/container/upperNav";
import Input from "@/components/UI/input";
import Hero from "@/container/Hero";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Top Bar Section */}
      <UpperNav />

      {/* Navbar */}
      <nav className={`shadow-sm px-4 bg-white p-2 flex justify-between sticky top-0 items-center fixed top-0 w-full transition-all ${isScrolled ? "shadow-lg p-3" : "p-2"}`}>
        <div className="text-xl font-bold">
          <Image src={logo} width={50} height={50} />
        </div>
        <div className="hidden font-bold md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>

          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Dashboard</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border-[1px] border-[#3872BF] px-5 hover:bg-[#3872BF] hover:text-white text-[#3872BF] px-3 py-[6px] rounded">Login</button>
          <button className="border-[1px] hover:border-[1px] border-[#3872BF] px-5 bg-[#3872BF] hover:bg-white hover:text-[#3872BF] text-white py-[6px]  rounded">Register</button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl cursor-pointer">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#3872BF] text-white p-4 flex flex-col items-center space-y-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Dashboard</a>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}

    </div>
  );
}