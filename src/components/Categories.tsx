import React from "react";
import { RiRestaurantFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import { LuLamp } from "react-icons/lu";
import { FaCar } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { cn } from "../utils";
const Categories = () => {
  const data = [
    {
      text: "Restaurants",
      icon: ({ className }: { className?: string }) => (
        <RiRestaurantFill className={cn("size-10", className)} />
      ),
    },
    {
      text: "Shopping",
      icon: ({ className }: { className?: string }) => (
        <HiOutlineShoppingBag className={cn("size-10", className)} />
      ),
    },
    {
      text: "Nightlife",
      icon: ({ className }: { className?: string }) => (
        <HiOutlineSparkles className={cn("size-10", className)} />
      ),
    },
    {
      text: "Active Life",
      icon: ({ className }: { className?: string }) => (
        <TbTargetArrow className={cn("size-10", className)} />
      ),
    },
    {
      text: "Beauty & spas",
      icon: ({ className }: { className?: string }) => (
        <LuLamp className={cn("size-10", className)} />
      ),
    },
    {
      text: "Automotive",
      icon: ({ className }: { className?: string }) => (
        <FaCar className={cn("size-10", className)} />
      ),
    },
    {
      text: "Home services",
      icon: ({ className }: { className?: string }) => (
        <MdOutlineMapsHomeWork className={cn("size-10", className)} />
      ),
    },
    {
      text: "More",
      icon: ({ className }: { className?: string }) => (
        <IoIosMore className={cn("size-10", className)} />
      ),
    },
  ];
  return (
    <>
      <div className="px-8 hidden md:block max-w-[1244px] mt-8 mx-auto">
        <div className="text-4xl font-bold text-center">Categories</div>
        <div className="flex flex-wrap md:justify-between justify-center mt-12 gap-4 mb-32">
          {data.map(({ text, icon }) => (
            <Card key={text} Icon={icon} text={text} />
          ))}
        </div>
      </div>
      <div className="px-2 md:hidden max-w-[1244px] mt-4 mb-60 mx-auto">
        <div className="flex flex-wrap md:justify-between justify-center gap-3">
          {data.map(({ text, icon }) => (
            <Box key={text} Icon={icon} text={text} />
          ))}
        </div>
      </div>
    </>
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
const Box = ({
  Icon,
  text,
}: {
  Icon: React.FunctionComponent<{ className: string }>;
  text: string;
}) => {
  return (
    <div className="w-20 h-14 gap-1 flex flex-col items-center justify-center">
      <Icon className="size-6" />
      <div className="text-xs">{text}</div>
    </div>
  );
};
