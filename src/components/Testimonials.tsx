import Image from "next/image";
import React from "react";
export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "GymFlow has transformed how we manage our gym. The automation saves us hours every week.",
      author: "Sarah Johnson",
      role: "Fitness Center Owner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    },
    {
      quote:
        "The member management and scheduling features are incredibly intuitive. Best investment for our gym.",
      author: "Mike Thompson",
      role: "CrossFit Gym Owner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    },
  ];
  return (
    <section id="testimonials" className="w-full  py-20">
      <div className="app-layout mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="  font-bold text-center text-light mb-16">
          <span className="text-highlight">Trusted</span> by Gym Owners
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="  p-8 rounded-lg shadow-lg ">
              <p className="text-secondary mb-6   italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  src={"/me.png"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-light">
                    {testimonial.author}
                  </p>
                  <p className="text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
