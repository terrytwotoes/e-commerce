import { useState, useEffect } from "react";
const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="max-w-6xl px-2 flex justify-center items-center mt-10 cursor-pointer">
      <img
        src={
          isMobile
            ? "https://www.colorbarcosmetics.com/cdn/shop/files/Lips_-_Mobile_413x.progressive.jpg?v=1688106792"
            : "https://www.colorbarcosmetics.com/cdn/shop/files/Lips_-_Desktop_1465x.progressive.jpg?v=1688106792"
        }
        alt="banner"
      />
    </div>
  );
};

export default Banner;
