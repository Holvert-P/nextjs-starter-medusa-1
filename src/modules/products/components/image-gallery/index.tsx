"use client"
import { HttpTypes } from "@medusajs/types"
import CustomSwiper from "@modules/common/components/swiper-slides"
import Image from "next/image"
import { SwiperSlide } from "swiper/react"
type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  console.table(images)
  return (
    <div className="flex items-start relative">
      <div className="flex justify-center items-center md:h-[80vh] h-[100vh] lg:w-[40vw] w-full sm:mx-10 mx-0">
        <CustomSwiper>
          {images.map((image, index) => {
            return (
              <SwiperSlide key={image.id}>
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            )
          })}
        </CustomSwiper>
      </div>
    </div>
  )
}

export default ImageGallery
