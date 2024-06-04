import CompanyName from "./CompanyName";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductWindow() {
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [willBuy, setWillBuy] = useState(false);
  const [orderingData,setOrderingdata] = useState({
    productid:productId
  });
  const handleChange=(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setOrderingdata({
      ...orderingData,
      [name]:value
    })
// console.log(orderingData)
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/services/orders`, {
        method:"POST",
        headers:{
        "Content-Type":"application/json",
          "Authorization":"Bearer " + localStorage.getItem("token")
        },
        body:JSON.stringify(orderingData)
      });
      const resData = await response.json()
      if(resData.status == "ok"){
        alert("Order Placed!!")        
      }
      
    } catch (error) {
      console.log(error)
    }
  }

 
  const willBuyFunction = () => {
    setWillBuy(!willBuy);
  };
  const fetchProductData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/services/product/${productId}`,
        {
          method: "GET",
        }
      );
      const resData = await response.json();
      setProductData(resData.msg);
      console.log(resData.msg);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="w-screen h-screen ">
      <div className="w-11/12 py-8 mx-auto  text-center">
        {productData && (
          <p className="text-2xl text-zinc-800">
            {" "}
            <span className="font-bold text-black">Product :-</span>
            {productData.title}
          </p>
        )}
        <div className=" py-4   flex justify-between px-10 md:px-0 gap-4 pt-4 flex-col md:flex-row ">
          {productData && (
            <div className="   bg-zinc-100 w-8/12 gap-1 md:gap-6  shadow-xl rounded-lg p-6 flex flex-col md:flex-row">
              <div className=" w-fit   mx-auto  ">
                <img
                  src={`http://localhost:8000/images/${productData.image}`}
                  alt="Cat with glasses"
                  className=" rounded-lg shadow-lg h-96"
                />
              </div>
              <div className="text-start  flex justify-around flex-col w-7/12 gap-4">
                {" "}
                <p className="font-bold text-xl  w-fit mr-auto">
                  {productData.title}
                </p>
                <p className="  w-fit  text-zinc-600">
                  {productData.description}
                </p>
                <div className="font-semibold text-xl">
                  <p>{productData.price}</p>
                </div>
                <div className="flex gap-4    ">
                  <button
                    onClick={willBuyFunction}
                    className="py-2 px-4   bg-yellow-400 rounded-md shadow-lg  w-full sm:w-36"
                  >
                    {willBuy ? "cancel Ordering" : "Buy"}
                  </button>{" "}
                </div>
              </div>
            </div>
          )}
          {willBuy && (
            <div className=" border  shadow-xl  bg-zinc-200 text-center rounded-lg p-4   flex flex-col gap-3">
              <p className="text-xl">Delivery Details</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="name"
                    onChange={handleChange}
                    className="w-full h-8 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="address">Address</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
                    className="w-full h-16 rounded-md"
                  />
                </div>
                <div className="flex gap-4 ">
                  <div className="flex  w-1/2  flex-col gap-2 items-start">
                    <label htmlFor="qty">Pincode</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="pincode"
                      id="pincode"
                      className="  w-full   h-8 rounded-md"
                    />
                  </div>{" "}
                  <div className="flex flex-col w-1/2 gap-2 items-start">
                    <label htmlFor="qty">Quantity</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="qty"
                      id="qty"
                      className="  w-full  h-8 rounded-md"
                    />
                  </div>
                </div>
                <div className=" flex justify-between gap-4">
                  <select
                    onChange={handleChange}
                    name="delivermethod"
                    className="w-1/2 py-2 px-4  bg-zinc-400 rounded-md shadow-lg   "
                    id="deliverMethod"
                  >
                    <option value="name"> Payment Method</option>
                    <option value="Cash On delivery">Cash On Delivery</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                  <button
                    onClick={handleSubmit}
                    className="w-1/2  bg-yellow-400 rounded-md shadow-lg   "
                  >
                    {" "}
                    Place an Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
