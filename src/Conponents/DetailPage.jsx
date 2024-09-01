import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import data from "./data";
const DetailPage = () => {
//   const data = useSelector((state) => state.itemData);
const[data1,setData1]=useState(data)
  const { id } = useParams();
  console.log(data)
  return (
   <>
     <div >
      {data1.map((item, index) => {
        if (parseInt(item.id) === parseInt(id)) {
          return(
            <div
            key={index}
            className="w-[30%] mt-10 h-[20%] m-auto flex flex-col items-center border-2 shadow-md rounded-lg "
          >
            
              {" "}
              <img
                src={item.imgdata}
                className=" max-h-40 w-[45%] object-fill rounded-lg mt-5 "
              />
            <h2 className="mt-3 pl-3 text-2xl font-bold text-black">
              {item.rname.substring(0, 16) + "..."}
            </h2>
            <p className="pl-3 my-2">
              <strong>Price : </strong>
              {item.price} Rs
            </p>
            
          </div>
          )
        }
      })}
    </div>
    <Link to="/">
        <div className="w-[10%] my-3 m-auto border-2 flex justify-center items-center bg-black text-white rounded-md">
          <button className="py-2">back</button>
        </div>
      </Link>
   </>
  );
};

export default DetailPage;
