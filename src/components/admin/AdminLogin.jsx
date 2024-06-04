import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyName from "../CompanyName";
export default function AdminSignup() {
  const navigate = useNavigate();
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAdminLoginData({
      ...adminLoginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(adminLoginData),
      });
      
      const resData = await response.json();
      console.log(resData.msg);
      setIsAdmin(resData.isAdmin);
      if(resData.msg == true){
        navigate("/admin/home");
      }else{
        alert("Data not valid")
      }
    
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <> 
      <div className="w-screen pt-10   h-screen">
        <div className="w-11/12   mx-auto flex flex-col gap-4 text-center ">
          <p className="text-2xl">Admin Login</p>
          {isAdmin && <p>is Admin.</p>}
          <form
            action=""
            className=" w-full sm:w-2/3 md:w-2/5 border border-black rounded-xl px-4 py-8 mx-auto flex flex-col gap-3"
          >
            <div className="flex flex-col justify-start items-start ">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="px-2 outline-8 py-2 w-11/12 bg-gray-200 border rounded"
              />
            </div>{" "}
            <div className="flex flex-col justify-start items-start ">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                onChange={handleChange}
                // type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="px-2 outline-8 outline-red-500 py-2 w-11/12 bg-gray-200 border rounded"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-fit mx-auto px-3 py-2 bg-gray-200 border rounded  m-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
