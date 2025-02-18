import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
export const Hero = () => {
  return (
    <section className="w-full   pt-20">
      <div className="app-layout backdrop-blur-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-10 flex-col md:flex-row  items-center justify-between">
          <div>
            <h1 className=" md:text-5xl font-bold text-light mb-6">
              Streamline <br />Your <span className="text-highlight"> Gym Management</span> with GymSeeks
            </h1>
            <p className="  text-secondary mb-8 ">
              The all-in-one solution for modern gym owners. Manage members, and
              staff with ease.
            </p>
            <button className="bg-highlight text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:gap-5 duration-300 ">
              Get Started <BsArrowRight size={20} />
            </button>
          </div>
          <div className="relative ">
            {/* <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3" alt="Gym management dashboard preview" className="rounded-lg shadow-xl" /> */}
            <Image
              src={"/dotted.png"}
              width={800}
              height={500}
              alt="background image for hero section"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
