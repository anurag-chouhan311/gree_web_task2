import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { DecQnty, INcQnty, deleteCart, order } from "../redux/Actions/action";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const CartItem = () => {
  const products = useSelector((state) => state.itemData);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState("");
  let total = 0;
  const handleInc = (item) => {
    dispatch(INcQnty(item));
  };
  const handleDec = (item) => {
    dispatch(DecQnty(item));
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };
  const handleOrder = (item) => {
    dispatch(order(item));
    alert("ordered...")
  };

  useEffect(() => {
    products.map((item, index) => {
      total += item.price * item.qnty;
    });

    setTotalAmount(total);
    console.log(total);
  }, [products]);
  return (
    <>
      <div className="w-[90%] py-4 m-auto border-2 mt-5 flex gap-12 flex-wrap justify-center items-center">
        {products &&
          products.map((item, index) => {
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
                <div className="flex gap-3 items-center justify-center my-3">
                  {
                    <>
                      <span>
                        <button
                          className="border-2 text-3xl cursor-pointer"
                          onClick={() => handleDec(item)}
                        >
                          {" "}
                          <AiOutlineMinus />
                        </button>
                      </span>{" "}
                      <p>Qnty : {item.qnty}</p>{" "}
                      <span>
                        <button
                          className="border-2 text-3xl cursor-pointer"
                          onClick={() => handleInc(item)}
                        >
                          <IoIosAdd />
                        </button>
                      </span>
                    </>
                  }
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="border-2 p-1 m-2 rounded-md "
                >
                  <RiDeleteBin5Line className="m-auto text-2xl hover:text-red-700" />
                </button>

                <button
                  onClick={() => handleOrder(item)}
                  className="border-2 p-1 m-2 rounded-md "
                >
                  order now
                </button>
              </div>
            );
          })}
      </div>
      <div className="w-[90%] h-auto p-2 border-2 m-auto text-center">
        Subtotal : {totalAmount} Rs{" "}
      </div>
      <Link to="/">
        <div className="w-[10%] my-3 m-auto border-2 flex justify-center items-center bg-black text-white rounded-md">
          <button className="py-2">back</button>
        </div>
      </Link>
    </>
  );
};

export default CartItem;
