import { Link } from "react-router-dom";
import { useAuth } from "../store/Auth";
import React from "react";

export default function Card({ title, desc, price, img, productId }) {
  const { token } = useAuth();
  const description = desc.slice(0,35);
  return (
    <>
      <div className="  flex flex-col  gap-1 h-96 justify-between  p-2 bg-zinc-100  w-60 border  rounded-lg">
        <img
          src={`http://localhost:8000/images/${img}`}
          alt="cat Image "
          className="rounded-lg"
        />
        <div className=" flex flex-col">
          <p className="font-semibold text-base">{title}</p>
          <p>
            {description} 
          </p>
          <div className=" ">
            <p>{price}</p>
          </div>
          <div className=" flex gap-4">
            <Link
              className="py-2 px-4 bg-zinc-300 w-full text-center rounded-md shadow-sm"
              to={`/explore/product/${productId}`}
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
