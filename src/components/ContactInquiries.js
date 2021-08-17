import React from "react";
import { motion } from "framer-motion";
import style from "./inquiries.module.css";
import ShowInquiries from "./ShowInquiries";

const ContactInquiries = ({ Inquiries }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={style.motionContainer}
      >
        <p className={style.head}>Contact Inquiries</p>
        <div className={style.container}>
          <ShowInquiries Inquiries={Inquiries} query="CI" />
        </div>
      </motion.div>
    </>
  );
};

export default ContactInquiries;
