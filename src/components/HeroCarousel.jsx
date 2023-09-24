import { Carousel } from "@material-tailwind/react";

function HeroCarousel() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="mb-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-4 p-1 bg-black" : "w-1 p-1 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/USK_WEB_BANNER_2_copy_1923x.progressive.jpg?v=1689244833"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/ENGRAVING_HOME_PAGE_BANNER_copy_2_1923x.progressive.jpg?v=1688730719"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/pride_month_REWARD_BANNER_copy_1923x.progressive.jpg?v=1686298024"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/neon_pouch_copy_1923x.progressive.jpg?v=1688127415"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/stary-drop-main-banner_1923x.progressive.jpg?v=1684607655"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.colorbarcosmetics.com/cdn/shop/files/makeup_maniac_d_1923x.progressive.jpg?v=1682314790"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default HeroCarousel;
