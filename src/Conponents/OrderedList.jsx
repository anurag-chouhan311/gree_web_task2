import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderedList = () => {
  const data = useSelector((state) => state.orders);
  const [totalAmount, setTotalAmount] = useState("");
  let total = 0;
  useEffect(() => {
    data.map((item, index) => {
      total += item.price * item.qnty;
    });

    setTotalAmount(total);
    // console.log(total);
  }, [data]);
  console.log(data);
  return (
    <>
     {
      data.length>0 ? <div>
     <div className="w-[90%] py-4 m-auto border-2 mt-5 flex gap-12 flex-wrap justify-center items-center">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[20%] h-[20%] flex flex-col border-2 shadow-md rounded-lg "
              >
                <img
                  src={item.imgdata}
                  className=" max-h-40 w-full object-fill rounded-md "
                />
                <h2 className="mt-3 pl-3 text-2xl font-bold text-black">
                  {item.rname.substring(0, 16) + "..."}
                </h2>
                <p className="pl-3 my-2">
                  <strong>Price : </strong>
                  {item.price} Rs
                </p>
              </div>
            );
          })}
      </div>
      <div className="w-[90%] h-auto p-2 border-2 m-auto text-center">
        Subtotal : {totalAmount} Rs{" "}
      </div>
     </div> : <h1 className="text-center text-2xl mt-4">Your order List is Empty</h1>
     }
     <Link to="/">
        <div className="w-[10%] my-3 m-auto border-2 flex justify-center items-center bg-black text-white rounded-md">
          <button className="py-2">back</button>
        </div>
      </Link>
    </>
  );
};

export default OrderedList;
