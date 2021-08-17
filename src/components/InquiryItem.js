import React from "react";
import style from "./inquiryItem.module.css";
import { FaTrash } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { motion } from "framer-motion";

const InquiryItem = ({ Inquiry, showInquiryDetail }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className={style.container}
      onClick={() => showInquiryDetail(Inquiry)}
    >
      <p> From : {Inquiry.firstName}</p>
      <p>{Inquiry.date}</p>
      <div className={style.rightIcons}>
        <CgNotes className={style.btnNotes} />
        <FaTrash
          className={style.btnTrash}
          onClick={() => console.log("Deleting: ", Inquiry.id)}
        />
      </div>
    </motion.div>
  );
};

export default InquiryItem;
