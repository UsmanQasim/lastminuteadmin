import React from "react";
import { motion } from "framer-motion";
import style from "./inquiries.module.css";

import ShowInquiries from "./ShowInquiries";

const Inquiries = ({ Inquiries }) => {
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
          <ShowInquiries Inquiries={Inquiries} />
        </div>
      </motion.div>
    </>
  );
};

export default Inquiries;
