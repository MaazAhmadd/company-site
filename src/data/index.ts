export type CardData = {
  id: string;
  img: string;
  nameOfCompany: string;
  phoneNo: string;
  address: string;
  description: string;
};
export const cardData: CardData[] = [
  {
    id: "1",
    img: "/card1.png",
    nameOfCompany: "Frank",
    phoneNo: "1234567890",
    address: "phoenix AZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam modi dolor itaque asperiores blanditiis nisi delectus eum libero culpa.",
  },
  {
    id: "2",
    img: "/card2.png",
    nameOfCompany: "Paulette",
    phoneNo: "1234567890",
    address: "Conyers GA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam modi dolor itaque asperiores blanditiis nisi delectus eum libero culpa.",
  },
  {
    id: "3",
    img: "/card3.png",
    nameOfCompany: "Brent",
    phoneNo: "1234567890",
    address: "Caroliton TX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam modi dolor itaque asperiores blanditiis nisi delectus eum libero culpa.",
  },
];
