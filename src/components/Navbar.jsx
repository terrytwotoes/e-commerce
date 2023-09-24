import { Navbar, IconButton, Input } from "@material-tailwind/react";

import { useEffect, useState } from "react";

import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

import { BsBag } from "react-icons/bs";
import MobileNav from "./MobileNav";

function StickyNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <Navbar className="mx-auto w-full shadow-none py-3 sticky">
          <div className="grid grid-cols-5 gap-x-3  text-blue-gray-900">
            <img
              className="w-[150px] col-span-1 m-auto"
              src="https://www.colorbarcosmetics.com/cdn/shop/files/Colorbar-logo_430x.png?v=1649064962"
              alt="logo"
            />
            <div className="col-span-3">
              <Input
                type="search"
                label="Search for your favourite product"
                className="pr-20"
                containerProps={{
                  className: "min-w-[550px]",
                }}
                icon={<AiOutlineSearch />}
                color="black"
              />
            </div>
            <div className=" col-span-1">
              <IconButton variant="text" color="blue-gray">
                <AiOutlineHeart className="w-6 h-6 text-black" />
              </IconButton>
              <IconButton variant="text" color="blue-gray">
                <AiOutlineUser className="w-6 h-6 text-black" />
              </IconButton>
              <IconButton variant="text" color="blue-gray">
                <BsBag className="w-6 h-6 text-black" />
              </IconButton>
            </div>
          </div>
        </Navbar>
      )}
    </>
  );
}

export default StickyNavbar;
