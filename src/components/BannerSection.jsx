import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { lipsProductData } from "../data";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BannerSection = () => {
  return (
    <div>
      <div className="max-w-6xl my-10 mx-auto">
        <Banner />
        <div className="max-w-6xl my-10 mx-auto">
          <Slider {...settings}>
            {lipsProductData.map((element) => (
              <ProductCard key={element.id} data={element} />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center my-5">
          <a href="#" className="text-[#48100a] underline">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
