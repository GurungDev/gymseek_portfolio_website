import React from "react";
import { BsArrowRight } from "react-icons/bs";
 export const CTA = () => {
  return <section id="contact" className="w-full   py-20">
      <div className="app-layout mx-auto px-4 sm:px-6  lg:px-8 text-center">
        <h3 className=" font-bold text-light mb-6">
          Ready to Transform Your Gym Management?
        </h3>
        <p className="  text-secondary mb-8">
          Join thousands of successful gym owners using GymFlow
        </p>
        <button className="  bg-light  text-highlight px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-highlight hover:text-white transition-colors mx-auto">
          Start Free Trial <BsArrowRight size={20} />
        </button>
      </div>
    </section>;
};