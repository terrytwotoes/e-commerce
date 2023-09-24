import { SlBadge } from "react-icons/sl";
import { BsBoxFill, BsTruck } from "react-icons/bs";

const featureData = [
  {
    title: "Get Free Shipping",
    icon: <BsTruck className="w-14 h-10 text-white " />,
    data: "for orders above Rs 499",
  },
  {
    title: "100% Authentic Products",
    icon: <SlBadge className="w-14 h-10 text-white " />,
    data: "Sourced directly from authorised ColorBar Stores",
  },
  {
    title: "Get Easy Returns",
    icon: <BsBoxFill className="w-14 h-10 text-white " />,
    data: "15-day easy returns for most products",
  },
];

const Features = () => {
  return (
    <div className="bg-[#e2a089] flex justify-center items-center pb-8  px-3 my-16 lg:py-8 lg:px-8">
      {featureData.map((item, index) => (
        <div
          key={index}
          className="w-1/3 relative flex flex-col justify-center items-center lg:flex-row   "
        >
          <div className="bg-[#48100A] rounded-full w-[80px] h-[80px] flex justify-center items-center relative -top-10 lg:static lg:mr-5">
            {item.icon}
          </div>
          <div className="flex flex-col justify-center items-center lg:text-left lg:justify-start">
            <h2 className="font-bold text-xs leading-6 lg:text-lg">
              {item.title}
            </h2>
            <p className="text-xs lg:text-lg">{item.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
