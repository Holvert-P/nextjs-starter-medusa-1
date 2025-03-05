"use client"
import CustomSwiper from "@modules/common/components/swiper-slides"
import Image from "next/image"
import { useState } from "react"
import SwiperCore from "swiper"
import { SwiperSlide } from "swiper/react"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden top-[-60px]">
      {/* Imagen de fondo */}
      <CustomSwiper onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/ni/background.jpg"
            alt="Background Image"
            width={1280}
            height={100}
          />
          <div className="absolute right-0 top-3/4 t-ransform translate-y-[-50%] p-8 bg-black bg-opacity-50 text-white z-10">
            <div className="inner container flex flex-col items-start">
              <p
                className={`feature-subheader text-lg text-right${
                  activeIndex === 0 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                Bienvenido a
              </p>

              <h2
                className={`line-1 text-4xl md:text-6xl ${
                  activeIndex === 0 ? "slide-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                MIA SECRET NICARAGUA
              </h2>
              <div
                className={`rte line-2 text-xl ${
                  activeIndex === 0 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                <p>
                  Obtén un 20% de descuento en tu primer pedido. Código de uso:{" "}
                  <strong>ILOVEMIA</strong>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/ni/background1.jpg"
            alt="Background Image"
            width={1280}
            height={100}
          />

          <div className="absolute right-0 top-3/4 t-ransform translate-y-[-50%] p-8 bg-black bg-opacity-50 text-white z-10">
            <div className="inner container flex flex-col items-start">
              <p
                className={`feature-subheader text-lg text-right${
                  activeIndex === 1 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                Descubre nuestra tienda
              </p>

              <h2
                className={`line-1 text-4xl md:text-6xl ${
                  activeIndex === 1 ? "slide-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                PRODUCTOS EXCLUSIVOS
              </h2>
              <div
                className={`rte line-2 text-xl ${
                  activeIndex === 1 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                <p>
                  ¡Explora nuestra gama de productos y encuentra lo que
                  necesitas con un 15% de descuento! Código de uso:{" "}
                  <strong>WELCOME15</strong>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/ni/background2.jpg"
            alt="Background Image"
            width={1280}
            height={100}
          />

          <div className="absolute right-0 top-3/4 t-ransform translate-y-[-50%] p-8 bg-black bg-opacity-50 text-white z-10">
            <div className="inner container flex flex-col items-start">
              <div
                className={`feature-subheader text-lg ${
                  activeIndex === 2 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                Descubre
              </div>

              <h2
                className={`line-1 text-4xl md:text-6xl ${
                  activeIndex === 2 ? "slide-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                NUEVOS TONOS DE GELUX
              </h2>
              <div
                className={`rte line-2 text-xl ${
                  activeIndex === 2 ? "fade-in" : ""
                }`}
                data-cc-animate=""
                data-cc-animate-delay="0.4s"
              >
                <p>
                  ¡Sumérgete en más de 50 tonos vibrantes para renovar tus uñas!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </CustomSwiper>
    </section>
  )
}

export default Hero
