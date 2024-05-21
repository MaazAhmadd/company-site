import { Link, useParams } from "react-router-dom";
import { CardData, cardData } from "../data";

const Category = () => {
  return (
    <div className="px-8 max-w-[1244px] mt-28 mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;

const Card = ({ data }: { data: CardData }) => {
  const { query } = useParams();
  return (
    <Link to={`/categories/${query}/description/${data.id}`}>
      <div
        className="w-[300px] p-4"
        style={{
          boxShadow: "0px 0px 10px #bfbfbf",
        }}
      >
        <div>
          <img className="w-full rounded-md" src={data.img} alt="" />
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center mb-1">
            <p className="font-bold text-xl">{data.nameOfCompany}</p>
            <p>{data.phoneNo}</p>
          </div>
          <p className="text-sm font-semibold mb-1">{data.address}</p>
          <p className="text-sm">
            {data.description.slice(0, 100)}
            {data.description.length > 100 && "..."}
          </p>
        </div>
      </div>
    </Link>
  );
};
