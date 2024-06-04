import React from "react";
import Card from "./ProductCard";
import { useAuth } from "../store/Auth";
import CompanyName from "./CompanyName";
export default function Explore() {
  const { allProductsData } = useAuth();

  return (
    <div>
      <div className="w-screen">
        <div className="flex w-11/12 mx-auto    ">
          <div className="md:w-2/12 pt-4  bg-zinc-50 hidden    md:flex justify-start flex-col items-center gap-4  ">
            {" "}
            <select className="w-full p-2 bg-zinc-300 rounded-lg">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="slate">Slate</option>
            </select>
            <input
              type="text"
              placeholder="this is 2nd"
              className="p-2 rounded-lg bg-zinc-300  placeholder-zinc-500  "
            />
          </div>
          <div className="w-full ">
            <p  className=" text-2xl my-4 w-fit mx-auto">Products</p>
            <div className="w-full  flex flex-wrap gap-4 justify-around mx-auto">
              {allProductsData &&
                allProductsData.map((curEle, id) => (
                  <div className="" key={id}>
                    <Card
                      title={curEle.title}
                      desc={curEle.description}
                      price={curEle.price}
                      img={curEle.image}
                      productId={curEle.productId}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
