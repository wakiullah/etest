'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import heroGif from '@/public/assests/HeroGif.gif'
import logo from '@/public/assests/logo.png'
import { TfiLayoutAccordionList } from "react-icons/tfi";
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
      <div className="bg-[#3872BF] p-2 flex justify-between items-center text-sm px-4 w-full z-50">
        <div>📍 Brooklyn, NY 12207, New York</div>
        <div className="flex space-x-4">
          <span>📞 (888) 446-7880</span>
          <span>✉ example@istudy.com</span>
        </div>
      </div>

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
      <section className="text-center p-10 md:p-20 flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl text-left font-bold">
            Discover the Top <span className="text-[#3872BF]">Courses</span> to Enhance Your Skills
          </h1>
          <p className="text-gray-600 text-left mt-4 max-w-lg">
            Universal is dedicated to offering educational experiences designed to align with new and evolving career paths.
          </p>
          <div className="mt-6 flex relative">
            <input type="text" placeholder="Search Program" className="border p-4 rounded-xl w-full" />
            <button className="bg-[#3872BF] text-white h-12 w-12 absolute top-[50%] left-[94%] -translate-x-1/2 -translate-y-1/2 rounded">
              <FaSearch className="w-full" />
            </button>
          </div>
          <section className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-[#3872BF] bg-opacity-[32%] p-4 rounded flex justify-between text-center">
              <div className="items-center flex">
                <TfiLayoutAccordionList size={30} />
              </div>
              <div className="text-left pl-3">
                <p className="text-xl font-bold">03+</p>
                <p className="text-gray-600">Online Courses</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <p className="text-xl font-bold">150+</p>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <p className="text-xl font-bold">2500+</p>
              <p className="text-gray-600">Enrolled Students</p>
            </div>
          </section>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-center ">
          <Image
            src={
              heroGif
            }
            alt="Man cartoon with laptop at desk working"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* Statistics Section */}

    </div>
  );
}
