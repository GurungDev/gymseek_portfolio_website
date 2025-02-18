import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md text-secondary py-12">
      <div className="app-layout mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7   gap-8 items-start justify-between ">
          {/* Company Logo and Name */}
          <div className="grid col-span-5 ">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={200}
              height={200}
              className="mb-4"
            />
            {/* Social Media Links */}
            <div className="flex">
              <nav>
                <h4 className=" text-light  font-semibold mb-4">Quick Links</h4>
                <div className="  flex gap-3 flex-wrap">
                  <Link
                    href="#home"
                    className="text-light hover:text-highlight"
                  >
                    Home
                  </Link>
                  <Link
                    href="#features"
                    className="text-light hover:text-highlight"
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-light hover:text-highlight"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-light hover:text-highlight"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#contact"
                    className="text-light hover:text-highlight"
                  >
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
              </nav>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 ">
            <div>
              {" "}
              <h4 className=" text-light font-semibold mb-4">Contact Us</h4>
              <address className="not-italic">
                <p>Pokhara, Parsyang</p>
                <p>Phone: 983242363</p>
                <p>Email: info@gymseeks.com</p>
              </address>
            </div>
            <div className="pt-20">
              <h4 className="  font-semibold mb-4 text-light">Follow Us</h4>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  className="text-white hover:text-gray-300"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-gray-300"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-white hover:text-gray-300"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-white hover:text-gray-300"
                >
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} gymseeks All rights reserved.
        </div>
      </div>
    </footer>
  );
}
