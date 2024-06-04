import { useAuth } from "../../store/Auth";
export default function Admin_products() {
  const { allProductsData } = useAuth();

  console.log("from app", allProductsData);
  return (
    <div className="w-screen ">
      <div className="w-10/12 mx-auto  flex flex-col gap-4">
        <p className="text-3xl">Products </p>
        <div className=" flex flex-col gap-4">
          <table>
            <tbody className="">
              {allProductsData &&
                allProductsData.map((curEle, id) => (
                  <tr
                    key={id}
                    className="border border-slate-700  bg-slate-200 rounded-2xl  "
                  >
                    <td className=" px-4  py-2">
                      <img
                        src={`http://localhost:8000/images/${curEle.image}`}
                        alt={curEle.title}
                        className="w-14 rounded-3xl mx-auto"
                      />
                    </td>
                    <td className=" p-4 text-start">{curEle.title}</td>
                    <td className="p-4  ">{curEle.description}</td>
                    <td className="p-4">{curEle.price}</td>
                    <td className="p-4">{curEle.color}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
