import {
  Button,
  Typography,
  Input,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlinePlus,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { LINKS } from "../data";

const currentYear = new Date().getFullYear();

function Icon({ id, open }) {
  return (
    <AiOutlinePlus
      color="white"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}

function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {LINKS.map((element, index) => (
        <Accordion
          key={index + 1}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className="text-white p-0 m-0 hover:text-white"
          >
            {element.title}
          </AccordionHeader>
          {element.items.map((item, index) => (
            <AccordionBody
              key={index}
              className="py-1 m-1 text-white cursor-pointer text-base"
            >
              {item} <br />
            </AccordionBody>
          ))}
        </Accordion>
      ))}
    </>
  );
}

function Footer() {
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
    <footer className="relative w-full bg-[#48100a] text-white pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div
          className={`${
            isMobile
              ? "grid grid-cols-1 justify-between gap-4 "
              : "grid grid-cols-1 justify-between gap-4 md:grid-cols-2"
          } `}
        >
          <div className="max-w-xs">
            <Typography variant="h1" className="mb-4">
              COLORBAR
            </Typography>

            <Typography className="text-[20px] font-semibold">
              Never miss a deal!
            </Typography>
            <Input
              variant="standard"
              label="Enter Email Address"
              color="white"
              className=""
            />
            <Button
              variant="outlined"
              className="rounded-none bg-white text-sm font-light mt-5 p-2 hover:bg-[#48100a] hover:border-white hover:text-white"
            >
              Sign Up
            </Button>
          </div>
          {isMobile ? (
            <AccordionCustomIcon />
          ) : (
            <div className="grid grid-cols-4 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-3 font-bold "
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="py-1.5 font-normal transition-colors "
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <Typography variant="h4" className="">
          Stay Connected
        </Typography>
        <div className="flex gap-4 mt-3">
          <AiFillFacebook className="w-8 h-8" />
          <AiOutlineTwitter className="w-8 h-8" />
          <AiOutlineInstagram className="w-8 h-8" />
          <AiFillYoutube className="w-8 h-8" />
        </div>
      </div>
      <div className="mt-12 flex w-full items-center justify-center  py-4 bg-white">
        <Typography
          variant="lead"
          className="mb-4 text-center font-extralight text-blue-gray-900 md:mb-0 text-sm sm:text-base"
        >
          Copyright &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/" className="underline">
            ColorBar Cosmetics Pvt. Ltd. Powered By React
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
