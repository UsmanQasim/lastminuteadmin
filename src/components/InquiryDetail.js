import React, { useState } from "react";
import Styles from "./inquiryDetails.module.css";
import { motion } from "framer-motion";
import { IoArrowBackCircle } from "react-icons/io5";

const InquiryDetail = ({ Inquiry, hideInquiryDetail, type }) => {
  const initial = { x: 1000, opacity: 0 };
  const animate = { x: 0, opacity: 1 };
  const exit = { x: -100, opacity: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.1, type: "spring", stiffness: 30 }}
    >
      {/* <button className={Styles.btn_back} onClick={hideInquiryDetail}>
        <IoArrowBackCircle />
        Return
      </button> */}
      {type === "WI" ? (
        <WeddingInq Inquiry={Inquiry} hideInquiryDetail={hideInquiryDetail} />
      ) : type === "CI" ? (
        <ContactInq Inquiry={Inquiry} hideInquiryDetail={hideInquiryDetail} />
      ) : (
        "Hello"
      )}
    </motion.div>
  );
};

const WeddingInq = ({ Inquiry, hideInquiryDetail }) => {
  const [active, setActive] = useState(false);
  const saveNote = () => {};

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.parent}>
          <table className={Styles.tableContainer}>
            <tr>
              <th colSpan="3">
                <div className={Styles.th_heading}>
                  <div>
                    <button onClick={hideInquiryDetail}>Back</button>
                  </div>
                  <div>
                    <label>FORM NO :</label>
                    <label>&nbsp;{Inquiry.id}</label>
                  </div>
                  <div></div>
                </div>
              </th>
            </tr>
            <tr>
              <th>Customer Details</th>
              <th>Event Details</th>
              <th>Comments</th>
            </tr>
            <tr>
              <td>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Name :</label>
                  <label>&nbsp;{Inquiry.gender}</label>
                  <label>&nbsp;{Inquiry.firstName}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Last name :</label>
                  <label>&nbsp;{Inquiry.lastName}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>ZipCode :</label>
                  <label>&nbsp;{Inquiry.pcode}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Email :</label>
                  <label>&nbsp;{Inquiry.email}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Phno :</label>
                  <label>&nbsp;{Inquiry.phone_no}</label>
                </div>
              </td>
              <td>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Packages :</label>
                  <label>&nbsp;{Inquiry.packages}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Date :</label>
                  <label>&nbsp;{Inquiry.date}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Venue to be :</label>
                  <label>&nbsp;{Inquiry.venue_to_be}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Total guests :</label>
                  <label>&nbsp;{Inquiry.total_guests}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Event type :</label>
                  <label>&nbsp;{Inquiry.event_type}</label>
                </div>
              </td>
              <td>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>Comments :</label>
                  <label>&nbsp;{Inquiry.comment}</label>
                </div>
                <div className={Styles.innerTable}>
                  <label className={Styles.tag}>They know us :</label>
                  <label>&nbsp;{Inquiry.how_you_know}</label>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className={Styles.noteArea}>
        <div className={Styles.noteHeader}>
          <h1>NOTES</h1>
          {active ? (
            <div>
              <button
                className={Styles.btnNotes}
                onClick={() => setActive(false)}
              >
                Discard
              </button>
              <button className={Styles.btnNotes} onClick={saveNote}>
                Save
              </button>
            </div>
          ) : (
            <button className={Styles.btnNotes} onClick={() => setActive(true)}>
              Edit
            </button>
          )}
        </div>
        <div>
          <textarea
            className={active && Styles.active}
            disabled={!active}
          ></textarea>
        </div>
      </div>
    </>
  );
};

const ContactInq = ({ Inquiry, hideInquiryDetail }) => {
  return (
    <div className={Styles.container}>
      <table className={Styles.tableContainer}>
        <tr>
          <th colSpan="3">
            <button
              onClick={hideInquiryDetail}
              style={{ alignSelf: "flex-start" }}
            >
              Back
            </button>
            <label>FORM NO :</label>
            <label>&nbsp;{Inquiry.id}</label>
          </th>
        </tr>
        <tr>
          <th>Customer Details</th>
          <th>Event Details</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Name :</label>
              <label>&nbsp;{Inquiry.firstName}</label>
            </div>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Email :</label>
              <label>&nbsp;{Inquiry.email}</label>
            </div>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Phno :</label>
              <label>&nbsp;{Inquiry.contact_no}</label>
            </div>
          </td>
          <td>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Party Type : </label>
              <label>&nbsp;{Inquiry.type_of_party}</label>
            </div>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Total guests :</label>
              <label>&nbsp;{Inquiry.total_guests}</label>
            </div>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Venue : </label>
              <label>&nbsp;{Inquiry.venue_optional}</label>
            </div>
          </td>
          <td>
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Date :</label>
              <label>&nbsp;{Inquiry.date}</label>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="1">
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>Terms Agree :</label>
              <label>&nbsp;{Inquiry.agree}</label>
            </div>
          </td>
          <td colSpan="2">
            <div className={Styles.innerTable}>
              <label className={Styles.tag}>They know us :</label>
              <label>&nbsp;{Inquiry.terms_and_condition}</label>
            </div>
          </td>
        </tr>
      </table>
    </div>

    // <div className={Styles.container}>
    //   <div className={Styles.column}>
    //     <div className={Styles.innerContainer}>
    //       <label>Form No : </label>
    //       <p>{Inquiry.Inquiry.id}</p>
    //     </div>
    //   </div>
    //   <div className={Styles.column_header}>
    //     <h2>Customer Detail</h2>
    //     <h2>Event Detail</h2>
    //     <h2>Date</h2>
    //   </div>
    //   <div className={Styles.content}>
    //     <div className={Styles.customer_detail}>
    //       <div className={Styles.innerContainer}>
    //         <label>Name : </label>
    //         <p>{Inquiry.Inquiry.firstName}</p>
    //       </div>
    //       <div className={Styles.innerContainer}>
    //         <label>Contact NO : </label>
    //         <p>{Inquiry.Inquiry.contact_no}</p>
    //       </div>
    //       <div className={Styles.innerContainer}>
    //         <label>Email : </label>
    //         <p>{Inquiry.Inquiry.email}</p>
    //       </div>
    //     </div>
    //     <div className={Styles.event_detail}>
    //       <div className={Styles.innerContainer}>
    //         <label>Total Guests : </label>
    //         <p>{Inquiry.Inquiry.total_guests}</p>
    //       </div>
    //       <div className={Styles.innerContainer}>
    //         <label>Party Type : </label>
    //         <p>{Inquiry.Inquiry.type_of_party}</p>
    //       </div>
    //       <div className={Styles.innerContainer}>
    //         <label>Venue : </label>
    //         <p>{Inquiry.Inquiry.venue_optional}</p>
    //       </div>
    //     </div>
    //     <div className={Styles.date_detail}>
    //       <div className={Styles.innerContainer}>
    //         <label>Date : </label>
    //         <p>{Inquiry.Inquiry.date}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={Styles.innerContainer}>
    //     <label>Term Agree : </label>
    //     <p>{Inquiry.Inquiry.terms_and_condition}</p>
    //   </div>
    //   <div className={Styles.innerContainer}>
    //     <label>Terms Agree : </label>
    //     <p>{Inquiry.Inquiry.agree}</p>
    //   </div>
    //</div>
  );
};

export default InquiryDetail;
