"use client"
import React from "react"
import SwiperCore from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper } from "swiper/react"

type CustomSwiperProps = {
  children: React.ReactNode
  onSlideChange?: (swiper: SwiperCore) => void
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  onSlideChange,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={1}
      loop
      className="w-full h-full"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={onSlideChange}
    >
      {children}
    </Swiper>
  )
}

export default CustomSwiper
