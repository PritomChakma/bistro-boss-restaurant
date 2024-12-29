import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingTitle from "../../../Components/Heading/HeadingTitle";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20 w-11/12 mx-auto text-center">
      {/* Section Heading */}
      <HeadingTitle
        subHeading="<--- What Our Clients Say --->"
        heading="TESTIMONIALS"
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-10"
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center p-8 ">
              {/* Rating */}
              <Rating
                className="flex justify-center mb-4"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              {/* Quote Icon */}
              <i className="fa-solid fa-quote-left text-5xl   mb-4"></i>
              {/* Review Details */}
              <p className=" mb-4">{review.details}</p>
              {/* Reviewer Name */}
              <h3 className="text-lg font-semibold  ">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
