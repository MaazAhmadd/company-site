import { useParams } from "react-router-dom";
import { cardData } from "../data";

const CategoryDescription = () => {
  const { id } = useParams();

  return (
    <div className="px-8 max-w-[1244px] md:mt-28 mt-14 mx-auto">
      {cardData
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <div className="flex items-center md:gap-32 gap-14 px-12 flex-col md:flex-row">
              <div className="md:hidden">
                <img
                  className="md:w-[400px] lg:w-[600px] w-[300px]"
                  style={{
                    boxShadow: "0px 0px 10px #bfbfbf",
                  }}
                  src={item.img}
                  alt=""
                />
              </div>
              <div>{item.description}</div>
              <div className="hidden md:block">
                <img
                  className="md:w-[400px] lg:w-[600px] w-[300px]"
                  style={{
                    boxShadow: "0px 0px 10px #bfbfbf",
                  }}
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryDescription;
