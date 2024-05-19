import React from "react";
import { RiRestaurantFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import { LuLamp } from "react-icons/lu";
import { FaCar } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
const Categories = () => {
  const data = [
    {
      text: "Restaurants",
      icon: () => <RiRestaurantFill className="size-10" />,
    },
    {
      text: "Shopping",
      icon: () => <HiOutlineShoppingBag className="size-10" />,
    },
    {
      text: "Nightlife",
      icon: () => <HiOutlineSparkles className="size-10" />,
    },
    {
      text: "Active Life",
      icon: () => <TbTargetArrow className="size-10" />,
    },
    {
      text: "Beauty & spas",
      icon: () => <LuLamp className="size-10" />,
    },
    {
      text: "Automotive",
      icon: () => <FaCar className="size-10" />,
    },
    {
      text: "Home services",
      icon: () => <MdOutlineMapsHomeWork className="size-10" />,
    },
    {
      text: "More",
      icon: () => <IoIosMore className="size-10" />,
    },
  ];
  return (
    <div className="px-8 max-w-[1244px] mt-8 mx-auto">
      <div className="text-4xl font-bold text-center">Categories</div>
      <div className="flex flex-wrap md:justify-between justify-center mt-12 gap-4 mb-32">
        {data.map(({ text, icon }) => (
          <Card key={text} Icon={icon} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

const Card = ({
  Icon,
  text,
}: {
  Icon: React.FunctionComponent;
  text: string;
}) => {
  return (
    <div className="w-64 h-48 flex flex-col items-center justify-center border border-gray-200 hover:bg-gray-100 cursor-pointer">
      <Icon />
      <div>{text}</div>
    </div>
  );
};
