import React from "react";
import CompanyName from "../CompanyName";
import { Link } from "react-router-dom";
import receptionist from "./img/receptionist.png";

export default function AdminHome() {
  return (
    <>
      <CompanyName />
      <div className="w-screen bg-zinc-100 h-screen pt-10">
        <div className="w-11/12 mx-auto  flex flex-col md:flex-row items-start  justify-center md:justify-between">
          <div className="md:w-5/12 hidden sm:block mb-6 md:mb-0 mx-auto  ">
            <img src={receptionist} alt="receptionist" className="md:w-8/12 rounded-xl" />
          </div>
          <div className="flex  py-10 flex-col gap-3 text-center  mx-auto   grow h-full md:text-left px-8">
            <p className="text-2xl font-bold">Hello Admin,</p>
            <p className="text-lg">We have a lot of things to get done.</p>
            <p className="text-lg">Would you like to go through them?</p>
            <div className="flex flex-col gap-2 mt-8">
              <Link
                className="px-3 py-1 bg-blue-600 text-white w-fit border border-white rounded-lg text-lg hover:bg-white hover:text-blue-600 hover:border-black"
                to="/admin/addproduct"
              >
                {" "}
                Add Products
              </Link>

              <Link
                className="px-3 py-1 bg-blue-600 text-white w-fit border border-white rounded-xl text-lg hover:bg-white hover:text-blue-600 hover:border-black"
                to="/admin/product_list"
              >
                See Products List
              </Link>
              <Link
                className="px-3 py-1 bg-blue-600 text-white w-fit rounded-2xl text-lg hover:bg-white hover:text-blue-600 "
                to="/admin/orders"
              >
                See Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
