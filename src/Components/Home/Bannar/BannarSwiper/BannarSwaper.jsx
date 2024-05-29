// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "keep-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// import required modules

const BannarSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full   md:h-full"
      >
        <SwiperSlide className="text-center mt-10">
          <h2 className=" font-semibold text-slate-200 ab max-w-3xl mx-auto    capitalize text-xl mb-4 md:text-6xl">
            Donate and Make an Impact Today
          </h2>
          <p className="capitalize text-slate-400 mb-10 max-w-3xl mx-auto  text-sm md:text-lg">
            Your generosity can change lives. By donating surplus food through
            our platform, youre not just feeding someone in need—youre
            nourishing hope and building a stronger, more compassionate
            community
          </p>

          <Link to="/addfood">
            <Button
              className="mx-auto text-xs md:text-base bg-green-700"
              color="primary"
            >
              Add food
            </Button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="text-center mt-10">
          <h2 className=" font-semibold text-slate-200 ab max-w-3xl mx-auto    capitalize text-xl mb-4 md:text-6xl">
            Join Our Community in Sharing Food!
          </h2>
          <p className="capitalize text-slate-400 mb-10 max-w-3xl mx-auto  text-sm md:text-lg">
            Welcome to [Your Website Name], where caring meets action. Whether
            youre in need of a meal or looking to make a difference, our
            platform connects those with excess food to those who could use a
            helping hand
          </p>

          <Button
            className="mx-auto text-xs md:text-base bg-green-700"
            color="primary"
          >
            Contect Us
          </Button>
        </SwiperSlide>

        <SwiperSlide className="text-center mt-10">
          <h2 className=" font-semibold text-slate-200 ab max-w-3xl mx-auto  text-center   capitalize text-xl mb-4 md:text-6xl">
            Request Assistance and Receive Support
          </h2>
          <p className="capitalize text-center text-slate-400 mb-10 max-w-3xl mx-auto  text-sm md:text-lg">
            In difficult times, reaching out for help is a sign of strength. If
            youre struggling to put food on the table, dont hesitate to request
            assistance through our platform. Together, we can overcome hunger
            and create a brighter future
          </p>

          <Link to="/availablefoods">
            <Button
              className="mx-auto text-xs md:text-base bg-green-700"
              color="primary"
            >
              Request
            </Button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default BannarSwiper;
