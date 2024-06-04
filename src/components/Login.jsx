import React, { useState } from "react";
import CompanyName from "./CompanyName";

export default function Login() {
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })

  function handleChange(e){
    let name = e.target.name
    let value = e.target.value

    setLoginData({
      ...loginData,
      [name]:value
    })
// console.log(loginData)
  }
async function  handleSubmit(e){
e.preventDefault();
  console.log(loginData);
try {
  const response = await fetch(`http://localhost:8000/user/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(loginData)
  })

  if(response.ok){
   const resData = await response.json()
      alert(resData.msg)
      localStorage.removeItem("token")
      localStorage.setItem("token",resData.jwt)
  }
} catch (error) {
  
}
}  return (
    <>
      <div className=" ">
        <div className="w-screen  mt-10  font-sans  ">
          <div className="w-11/12  mx-auto">
            <div className="  md:w-2/4 p-4 rounded-lg   bg-zinc-100 w-fit flex flex-col gap-4 mx-auto">
              <div className="font-mono ">
                <p className="text-2xl md:text-4xl  ">Login</p>
              </div>
              <div className="   flex flex-col gap-4 md:gap-6 ">
                <div className=" flex flex-col   ">
                  <label htmlFor="email" className=" text-zinc-500 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                    className="py-3 px-3  w-full  bg-zinc-300 rounded-md text-zinc-600"
                  />
                </div>{" "}
                <div className="   flex flex-col    ">
                  <label htmlFor="email" className=" text-zinc-500 text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    id="password"
                    className="py-3 px-3  w-full  bg-zinc-300 rounded-md text-zinc-600"
                  />
                </div>
                <button onClick={handleSubmit} className="bg-zinc-300 py-2 px-4 text-zinc-600 w-fit rounded-lg mx-auto ">
                  Login
                </button>
                <p className=" font-mono ml-auto  text-zinc-500  ">
                  Sign in to continue
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
