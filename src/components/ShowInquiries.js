import React from "react";
import { useState } from "react";
import InquiryItem from "./InquiryItem";

import InquiryDetail from "./InquiryDetail";
import { AnimatePresence } from "framer-motion";

const ShowInquiries = ({ Inquiries, query }) => {
  const [detailShown, showDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(Inquiries[0]);

  const showInquiryDetail = (Inquiry) => {
    setSelectedItem(Inquiry);
    showDetail(true);
  };
  const hideInquiryDetail = () => {
    showDetail(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {Inquiries ? (
        !detailShown ? (
          Inquiries.map((Inquiry, key) => (
            <InquiryItem
              Inquiry={Inquiry}
              key={key}
              showInquiryDetail={showInquiryDetail}
            />
          ))
        ) : (
          <InquiryDetail
            Inquiry={selectedItem}
            type={query}
            hideInquiryDetail={hideInquiryDetail}
          />
        )
      ) : (
        <p>No Inquiries</p>
      )}
    </AnimatePresence>
  );
};

export default ShowInquiries;
