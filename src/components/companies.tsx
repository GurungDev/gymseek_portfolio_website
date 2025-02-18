"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 3", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 7", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Client 8", logo: "/placeholder.svg?height=80&width=160" },
];

export default function ClientLogosSwiper() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="py-12  ">
      <div className=" mx-auto px-4">
        <h2 className="text-light font-bold text-center mb-2">
          Our <span className="text-highlight">Trusted Clients </span>{" "}
        </h2>
        <p className="text-secondary text-center  mb-8">
          We&apos;re proud to work with these industry-leading companies
        </p>
        {domLoaded && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.name}>
                <div className="w-full h-40 flex items-center justify-center p-4  rounded-lg shadow-sm">
                  <Image
                    src={"/logo.png"}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
