import React from "react";
import style from "./inquiryItem.module.css";
import { FaTrash } from "react-icons/fa";

const InquiryItem = ({ Inquiry, deleteItem }) => {
  return (
    <div
      className={style.container}
      onClick={() => console.log("here's Johney")}
    >
      <p> From : {Inquiry.fname}</p>
      <br />
      <p>{Inquiry.date}</p>
      <FaTrash
        className={style.btnTrash}
        onClick={() => deleteItem(Inquiry.id)}
      />
    </div>
  );
};

export default InquiryItem;
