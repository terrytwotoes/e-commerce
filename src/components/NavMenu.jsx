import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";

const menuItems = [
  {
    title: "Face",
    description: "Concealer",
  },
  {
    title: "Lips",
    description: "Lipstick",
  },
  {
    title: "Eyes",
    description: "Eye Liner",
  },
];

function NavMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="lg:flex w-full gap-8 justify-center items-center border-t hidden ">
      <a href="#">New</a>
      <a href="#">Makeup</a>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
          >
            Technology{" "}
          </Button>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-3 gap-3 overflow-visible lg:grid">
          <Card
            color="gray"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          ></Card>
          <ul className="col-span-3 flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem>
                  <Typography variant="h6" className="mb-1">
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
      <a href="#">Haircare</a>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
          >
            Accessories{" "}
          </Button>
        </MenuHandler>
        <MenuList className="hidden w-full grid-cols-3 gap-3 overflow-visible lg:grid">
          {/* <Card
            color="gray"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          ></Card> */}
          <ul className="col-span-3 flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem className="col-span-1">
                  <Typography variant="h6" className="mb-1">
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
}

export default NavMenu;
