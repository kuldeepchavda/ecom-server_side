import { useState } from "react";
import CompanyName from "./CompanyName";
export default function SignUp() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    // console.log(signupData);
  }
  async function handleSubmit(e) {
    // e.preventDefault(); 
    
    try {
      const response =  await fetch(`http://localhost:8000/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
      console.log("Submitted", signupData);
      const resData = await response.json();
      alert(resData.msg)
      localStorage.setItem("token",resData.jwt)
      console.log(resData.jwt);
    } catch (error) {console.log(error)}
  }
  return (
    <>

      <div className="w-screen mt-10  font-sans  ">
        <div className="w-11/12  mx-auto">
          <div className="  bg-zinc-100  p-4 md:p-8 rounded-lg shadow-lg   w-full sm:w-1/2 flex flex-col gap-8 md:gap-14  mx-auto">
            <p className="text-2xl md:text-4xl font-mono  ">
              Create New Account
            </p>
            <div className="   flex flex-col gap-4 md:gap-6 ">
              <div className=" flex flex-col   ">
                <label htmlFor="email" className=" text-zinc-500 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email" 
                  onChange={handleChange}
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
              <button
                onClick={handleSubmit}
                className="bg-zinc-300 py-2 px-4 text-zinc-600 w-fit rounded-lg mx-auto "
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
