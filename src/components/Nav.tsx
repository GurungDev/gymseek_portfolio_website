"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [isScrolledDown, setIsScrolledDown] = useState(false); // For background color
  const [isVisible, setIsVisible] = useState(true); // For navbar visibility

  const lastScrollY = useRef(0); // Ref to persist last scroll position

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check scroll direction and set navbar visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      // Set background color for scrolling past a certain point
      setIsScrolledDown(currentScrollY > 50);

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      className={`w-full transition-transform duration-300 ease-in-out fixed top-0 z-50 ${
        isScrolledDown ? "backdrop-blur-lg" : "bg-transparent"
      } ${isVisible ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="app-layout mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              alt={`  logo`}
              width={160}
              height={80}
              className="max-w-full max-h-full object-contain"
            />{" "}
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-light hover:text-highlight">
              Home
            </Link>
            <Link href="#features" className="text-light hover:text-highlight">
              Features
            </Link>
            <Link href="#pricing" className="text-light hover:text-highlight">
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-light hover:text-highlight"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-light hover:text-highlight">
              Contact
            </Link>

            <a
              href="https://gymseek-gym-panel.vercel.app/login"
              className="text-light hover:text-highlight"
            >
              login
            </a>
            <a
              href="https://gymseek-gym-panel.vercel.app/register"
              className="text-light hover:text-highlight"
            >
              Sign Up
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light">
              <BiMenu size={24} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-primary py-4 px-10 rounded-md">
            <div className="flex flex-col space-y-4  ">
            <Link href="#home" className="text-light hover:text-highlight">
              Home
            </Link>
            <Link href="#features" className="text-light hover:text-highlight">
              Features
            </Link>
            <Link href="#pricing" className="text-light hover:text-highlight">
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-light hover:text-highlight"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-light hover:text-highlight">
              Contact
            </Link>

            <a
              href="https://gymseek-gym-panel.vercel.app/login"
              className="text-light hover:text-highlight"
            >
              login
            </a>
            <a
              href="https://gymseek-gym-panel.vercel.app/register"
              className="text-light hover:text-highlight"
            >
              Sign Up
            </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
