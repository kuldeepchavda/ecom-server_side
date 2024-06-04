import { useAuth } from "../store/Auth";
export default function CompanyName() {
const {cart,setCart} = useAuth();
  return (
    <div className="  w-screen  ">
      <div className="w-11/12  border-b mx-auto py-4 text-2xl flex justify-between">
        <p> Kuldeep Chavda</p>
        <button
          onClick={() => {
            setCart( cart+ 2);
          }}
        >
          {/* <p> cart ({cart})</p> */}
        </button>{" "}
      </div>
    </div>
  );
}
