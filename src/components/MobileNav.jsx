import { Navbar, IconButton, Input } from "@material-tailwind/react";

import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { BsBag } from "react-icons/bs";

function MobileNav() {
  return (
    <>
      <Navbar className="mx-auto w-full shadow-none py-3 sticky">
        <div className="flex justify-between items-center   text-blue-gray-900">
          <div className="flex gap-2 items-center">
            <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
            <img
              className="w-[150px] col-span-1 m-auto cursor-pointer"
              src="https://www.colorbarcosmetics.com/cdn/shop/files/Colorbar-logo_430x.png?v=1649064962"
              alt="logo"
            />
          </div>

          <div className="">
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
      <div className="w-full px-2 mb-3 border-t py-2">
        <Input
          type="search"
          label="Search for your favourite product"
          className="pr-20 py-4"
          containerProps={{
            className: "min-w-[340pxpx]",
          }}
          icon={<AiOutlineSearch />}
          color="black"
        />
      </div>
    </>
  );
}

export default MobileNav;
