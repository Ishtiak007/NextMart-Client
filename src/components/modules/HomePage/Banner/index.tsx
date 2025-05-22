"use client";
import AOS from "aos"; // ✅ Import AOS
import "aos/dist/aos.css"; // ✅ Import AOS styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { Crete_Round } from "next/font/google";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-crete-round",
});

const Slide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide

  const data = [
    { img: "../../../../app/assets/svgs/NowShop.jpg" },
    { img: "../../../../app/assets/svgs/ShopNow.jpg" },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (1.2s)
      once: false, // Run animation every time it enters viewport
      easing: "ease-in-out", // Smoother animation
    });
  }, []);
  return (
    <div className={`${creteRound.variable} font-serif`}>
      <div className="justify-center items-center m-auto">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ✅ Track current slide index
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              {/* ✅ Re-trigger animation on every slide change */}
              <motion.div
                key={activeIndex} // ✅ Force re-render on slide change
                className="relative w-full sm:h-screen md:h-[750px] bg-cover bg-center bg-no-repeat px-4"
                style={{ backgroundImage: `url(${d.img})` }}
                initial={{ scale: 1.2 }} // ✅ Start zoomed-in
                animate={{ scale: 1 }} // ✅ Zoom-out effect
                transition={{ duration: 2, ease: "easeOut" }} // ✅ Smooth transition
              >
                {/* Centering Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center m-auto px-4">
                  <Image
                    src="/asset/kalma.png"
                    alt="Kalma"
                    width={400}
                    height={100}
                    className="py-2 h-24"
                    data-aos="fade-up" // ✅ AOS Slide-up effect on Kalma image
                  />

                  <div className="py-24 text-center ">
                    <div className="flex gap-4 pb-8">
                      <Image
                        src="/asset/line.png"
                        alt="Kalma"
                        width={250}
                        height={150}
                        className="items-center justify-center  m-auto "
                        data-aos="fade-up" // ✅ AOS Slide-up effect on Kalma image
                      />
                      <p className="text-white text-2xl text-center">
                        Asslamu alikum{" "}
                      </p>
                      <Image
                        src="/asset/line.png"
                        alt="Kalma"
                        width={250}
                        height={100}
                        className="items-center justify-center  m-auto "
                        data-aos="fade-up" // ✅ AOS Slide-up effect on Kalma image
                      />
                    </div>
                    <h2
                      className="text-white font-semibold text-5xl pb-8"
                      data-aos="fade-up"
                    >
                      Allah and his angels send blessings
                      <br />
                      <span className="my-3">on the prophet</span>
                    </h2>
                    <p
                      className="text-white pb-8"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      O you who believe! send your blessings on him and salute
                      him with all respect.
                    </p>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3"
                      data-aos="flip-up"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-12 right-8 flex gap-2 z-10 justify-end">
          <button
            ref={prevRef}
            className="custom-prev bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]"
          >
            <FaArrowLeftLong size={16} />
          </button>
          <button
            ref={nextRef}
            className="custom-next bg-[#E6AC41] text-white w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]"
          >
            <FaArrowRightLong size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
