import React from "react";

import { motion } from "framer-motion";

const InquiryDetail = ({ Inquiry, hideInquiryDetail }) => {
  const initial = { x: 1000, opacity: 0 };
  const animate = { x: 0, opacity: 1 };
  const exit = { x: 1000, opacity: 0 };

  return (
    <motion.div initial={initial} animate={animate} exit={exit} transition={{duration: 1, type: "tween", ease:"anticipate"}}>
      <p>{Inquiry.id}</p>
      <button onClick={hideInquiryDetail}>Close</button>
    </motion.div>
  );
};

export default InquiryDetail;
