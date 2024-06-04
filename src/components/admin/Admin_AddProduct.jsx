import React, { useState } from "react";
import CompanyName from "../CompanyName";

export default function Admin_AddProduct() {
  const tableInputsTD = "p-4   w-3/4";
  const inputs = "  p-2 outline-none border-b border-black";
  const inputsTitle = "  text-xl ";
  const [image, setImage] = useState();
  const [productId,setProductId] = useState()
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    color: "",
    dest:""
  });
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  const handleImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",image) 
    try {
      const response = await fetch(`http://localhost:8000/admin/product/image`,{
        method:"POST",
        headers:{
          "Authorization":"Bearer "+ localStorage.getItem("token"),
        },
        body:formData
      });

      const resData = await response.json();
     setProductId(resData.msg.productId);
     alert("Please set the product id in the field named 'destination.' ")
    } catch (error) {
      alert("something went wrong")
      console.log(error.message)}
  };
  const dataSubmit = async(e)=>{
e.preventDefault();
console.log(productData)
try {
  const response = await fetch(`http://localhost:8000/admin/product/data`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      "Authorization": localStorage.getItem("token")
    },
    body:JSON.stringify(productData)
  })

  const resData = await response.json(response)
  console.log(resData)
  alert("Product added successfully.")
} catch (error) {
  console.log(error)
}
  }
  return (
    <>
      <div className="w-screen">
        <div className="w-11/12 mx-auto">
          <p className="text-4xl my-4">Add Items</p>
          <table className="table-auto w-full    ">
            <tbody>
              <tr className="">
                <td className={inputsTitle}>Image</td>
                <td
                  className={`${tableInputsTD} flex gap-8 w-full   justify-between`}
                >
                  <input
                    type="file"
                    className={`${inputs}  w-fit`}
                    name="image"
                    onChange={handleImageChange}
                  />
                  <p>{productId}</p>
                  <button
                    onClick={handleImageSubmit}
                    className="bg-red-200  px-3 py-2 rounded-lg"
                  >
                    Submit Image
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className={inputsTitle}>Title</td>
                <td className={tableInputsTD}>
                  <input
                    type="text"
                    className={`${inputs}  w-1/2`}
                    name="title"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className=" ">
                <td className={inputsTitle}>Description</td>
                <td className={tableInputsTD}>
                  <textarea
                    className={`${inputs}  w-full `}
                    rows="1"
                    name="description"
                    onChange={handleChange}
                  ></textarea>
                </td>
              </tr>
              <tr className=" ">
                <td className={inputsTitle}>Price</td>
                <td className={tableInputsTD}>
                  <input
                    className={`${inputs}  w-fit`}
                    name="price"
                    id="price"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className={inputsTitle}>Color</td>
                <td className={tableInputsTD}>
                  <select
                    className={inputs}
                    name="color"
                    onChange={handleChange}
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="slate">Slate</option>
                  </select>
                </td>
              </tr>
              <tr className=" ">
                <td className={inputsTitle}>Destination</td>
                <td className={tableInputsTD}>
                  <input
                    className={`${inputs}  w-fit`}
                    name="dest"
                    id="dest"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className=" ">
                <td className={inputsTitle}> </td>
                <td className={tableInputsTD}>
                  <button
                    onClick={dataSubmit}
                    className="py-3 px-6 rounded-xl bg-gray-200"
                  >
                    Upload Data
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
