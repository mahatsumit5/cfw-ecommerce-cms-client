// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default () => {
  const { catalogue } = useSelector((store) => store.catagoryInfo);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {catalogue.map((item, i) => (
        <Button
          key={i}
          variant=""
          //   active={
          //     button.btnName === item.title && button.isActive === true
          //       ? true
          //       : false
          //   }
          //   onClick={handleOnClick}
          value={item.title}
        >
          <SwiperSlide>{item.title}</SwiperSlide>
        </Button>
      ))}
    </Swiper>
  );
};
