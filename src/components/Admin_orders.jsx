import React from "react";
import { useAuth } from "../store/Auth";
function OrderItem(
  {
    userId,
    productId,
    quantity,
    price,
    address,
    pincode,
    fullname,
    paymentMethod,
    email,
  }
) {
  return (
    <div className="flex rounded-md bg-zinc-200 items-center py-3">
      <div className="flex flex-col   gap-4 py-6 px-3   border-r border-black">
        <div className="w-full flex flex-wrap gap-5 justify-evenly">
          {" "}
          <div className="flex gap-1">
            <span className="font-semibold">fullname:-</span>
            <span>{fullname}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">User Id:-</span>
            <span>{userId}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Product Id:-</span>
            <span> {productId}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Email:-</span>
            <span>{email} </span>
          </div>{" "}
        </div>
        <div className="w-full flex flex-wrap gap-4 justify-evenly">
          <div className="flex gap-1">
            <span className="font-semibold">Address:-</span>
            <span> {address}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Pin code:-</span>
            <span>{pincode}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Quantity:-</span>
            <span>{quantity}</span>
          </div>{" "}
          <div className="flex gap-1">
            <span className="font-semibold">Payment Method:-</span>
            <span>{paymentMethod}</span>
          </div>
        </div>
      </div>
      <div className="  h-full px-4">
        <button className="px-3 py-2 bg-blue-600 rounded-lg text-white">
          Fullfill order
        </button>
      </div>
    </div>
  );
}

export default function Admin_orders() {
const {orders} = useAuth();

  return (
    <div className="w-screen">
      <div className="w-11/12 mx-auto flex flex-col gap-4">
{orders && (
  <>
  <p className="font-bold text-xl">Orders</p>
{orders.map((curEle,id)=>(<div key={id}>
  <OrderItem userId={curEle.userid}
  productId={curEle.productid}
  quantity={curEle.qty}
  price={curEle.price}
  fullname={curEle.fullname}
  email={curEle.email}
  address={curEle.address}
  paymentMethod={curEle.paymentmethod}
  pincode={curEle.pincode}
  />
</div>
))}  
  </>
)}

      </div>
    </div>
  );
}
