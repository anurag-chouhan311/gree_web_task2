import React, { useEffect, useState } from "react";
import data from "./data";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../redux/Actions/action";
import { Link } from "react-router-dom";
const Items = () => {
  const [products, setProducts] = useState(data);
  const [products1, setProducts1] = useState(products);
  const storeData = useSelector((state) => state.itemData);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(Add(item));
    console.log(storeData);
  };

  useEffect(() => {
    const searchedData = products.filter((item, index) => {
      return item.rname.toLowerCase().includes(inputValue.toLowerCase());
    });
    setProducts1(searchedData);
  }, [inputValue]);
  return (
    <>
      <div className="m-auto w-[90%] mt-5 bg-[#cccccc7f] border-2 flex justify-center items-center p-3">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="outline-none border-2 p-1 pl-2 rounded-md"
          placeholder="search by name..."
        />
      </div>
      <div className="w-[90%] py-4 m-auto border-2 mt-5 flex gap-12 flex-wrap justify-center items-center">
        {products1 &&
          products1.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[20%] h-[20%] flex flex-col border-2 shadow-md rounded-lg "
              >
                <Link
                  className=" max-h-40  object-fill "
                  to={`/details/${item.id}`}
                >
                  {" "}
                  <img
                    src={item.imgdata}
                    className=" max-h-40 w-full object-fill rounded-md "
                  />
                </Link>
                <h2 className="mt-3 pl-3 text-2xl font-bold text-black">
                  {item.rname.substring(0, 16) + "..."}
                </h2>
                <p className="pl-3">
                  <strong>Price : </strong>
                  {item.price} Rs
                </p>
                {item.qnty == 0 ? (
                  <button
                    onClick={() => handleAdd(item)}
                    className="border-2 mx-2 my-3 p-2 bg-[#ccc] rounded-lg"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAdd(item)}
                    className="border-2 mx-2 my-3 p-2 bg-[#ccc] rounded-lg"
                  >
                    Added
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Items;
