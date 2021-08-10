import React from "react";
import { motion } from "framer-motion";
import style from "./inquiries.module.css";
import InquiryItem from "./InquiryItem";

const Inquiries = ({ Inquiries }) => {
  const deleteItem = (id) => {
    const filtered = Inquiries.filter((Inquiry) =>
      Inquiry.id === id ? true : false
    );
    console.log(filtered);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={style.motionContainer}
      >
        <p className={style.head}>Inquiries</p>
        <div className={style.container}>
          {Inquiries.map((Inquiry, key) => (
            <InquiryItem Inquiry={Inquiry} key={key} deleteItem={deleteItem} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Inquiries;
