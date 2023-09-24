import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiOutlineHeart } from "react-icons/ai";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-yellow-700"
    >
      <path
        fillRule="nonzero"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProductCard(props) {
  return (
    <Card className="w-72 rounded-none shadow-sm shadow-[#48100aaf]">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src={props.data.src}
          alt="card-image"
          className="absolute top-0 right-0 bottom-0 left-0 flex flex-wrap h-full w-full"
        />
        {props.data.isBestSeller && (
          <span className="!absolute top-4 left-4 text-sm w-20 h-5 p text-gray-700 font-medium bg-gray-300 rounded-none cursor-grab text-center ">
            Best Seller
          </span>
        )}
      </CardHeader>
      <CardBody className="py-0">
        <div className="5 flex items-center gap-0">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p className="ml-1 text-xs">{props.data.reviews}</p>
        </div>
        <div className="my-2 w-30">
          <Typography
            color="blue-gray"
            className="font-bold text-ellipsis capitalize overflow-hidden whitespace-nowrap"
          >
            {props.data.name}
          </Typography>
          <Typography color="blue-gray" className="font-bold">
            &#8377;{props.data.price}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex">
        <IconButton variant="outlined" className="rounded-none">
          <Tooltip content="Wishlist" placement="top">
            <AiOutlineHeart className="w-5 h-5" />
          </Tooltip>
        </IconButton>
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#48100a] text-white font-bold shadow-none rounded-none uppercase"
        >
          Select shade
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
