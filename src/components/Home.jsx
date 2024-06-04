import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="w-screen bg-gray-900  ">
      <div className="flex  gap-10  w-11/12  p-6 mx-auto  items-start flex-col md:flex-row  flex-wrap  ">
        <p className="  py-3  px-5  border-b text-white border-zinc-300">
          Go to -&gt;
        </p>
        <Link
          className="text-white border py-3  px-5 rounded-lg  "
          to="/signup"
        >
          SignUP
        </Link>
        <Link className="text-white border py-3  px-5 rounded-lg " to="/login">
          Login
        </Link>
        <Link
          className="text-white border py-3  px-5 rounded-lg "
          to="/product_card"
        >
          Product Card
        </Link>
        <Link
          className="text-white border py-3  px-5 rounded-lg "
          to="/explore/product/23t7612tw"
        >
          Product Window
        </Link>{" "}
        <Link
          className="text-white border py-3  px-5 rounded-lg "
          to="/admin/addproduct"
        >
          Add Product (Admin Panel)
        </Link>
        <Link
          className="text-white border py-3  px-5 rounded-lg "
          to="/explore"
        >
          Explore
        </Link>
        <Link
          className="text-white border py-3  px-5 rounded-lg "
          to="/admin/orders"
        >
          Admin orders
        </Link>{" "}
        <Link className="text-white border py-3  px-5 rounded-lg " to="/admin/">
          Admin login
        </Link>
      </div>
    </div>
  );
}
