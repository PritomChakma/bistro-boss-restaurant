import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import HeadingTitle from "../../Components/Heading/HeadingTitle";

const Category = () => {
  return (
    <section>
      <div>
        <HeadingTitle
          subHeading={"<---From 11:00am to 10:00pm--->"}
          heading={"ORDER ONLINE"}
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={img1} alt="" srcset="" />
          <h3 className="md:text-3xl text-white uppercase -mt-16 text-center">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" srcset="" />
          <h3 className="md:text-3xl text-white uppercase -mt-16 text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" srcset="" />
          <h3 className="md:text-3xl text-white uppercase -mt-16 text-center">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" srcset="" />
          <h3 className="md:text-3xl text-white uppercase -mt-16 text-center">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" srcset="" />
          <h3 className="md:text-3xl text-white uppercase -mt-16 text-center">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
