//import react stuff
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
// import {useEffect} from 'react';

//import external library stuff
// import { AnimatePresence } from "framer-motion";
// import { Switch, Route, useLocation, Redirect } from "react-router-dom";

// import Components stuff
import Sidemenu from "./components/Sidemenu";

//redux - start
import { fetchInquiries } from "./redux/inquiries/inquryActions";
import { connect } from "react-redux";
//redux - end

import {CgLogOut} from 'react-icons/cg';
//import custom stuff
import "./App.css";
//importing Pages;
import ContactInquiries from "./components/ContactInquiries";
import Inquiries from "./components/Inquiries";

const NotFound = () => {
  return <div>NotFound</div>;
};

const InquiryData = [
  {
    id: "1",
    fname: "Usman",
    date: "9-06-2001",
  },
  {
    id: "2",
    fname: "Asad",
    date: "9-06-2001",
  },
  {
    id: "3",
    fname: "Hashir",
    date: "9-06-2001",
  },
  {
    id: "4",
    fname: "Rick Ashly",
    date: "9-06-2001",
  },
];

const ContactInquiryData = [
  {
    id: "1",
    fname: "Pewds",
    date: "9-06-2001",
  },
  {
    id: "2",
    fname: "Jack",
    date: "9-06-2001",
  },
  {
    id: "3",
    fname: "Markiplier",
    date: "9-06-2001",
  },
  {
    id: "4",
    fname: "Cinnamon Toast",
    date: "9-06-2001",
  },
  {
    id: "4",
    fname: "Cinnamon Toast",
    date: "9-06-2001",
  },
  {
    id: "4",
    fname: "Cinnamon Toast",
    date: "9-06-2001",
  },
  {
    id: "4",
    fname: "Cinnamon Toast",
    date: "9-06-2001",
  },
];

const App = () => {
  const [selected, setSelected] = useState("Inquiries");

  console.log(setSelected);

  const showComponent = () => {
    switch (selected) {
      case "Inquiries":
        return <Inquiries Inquiries={InquiryData} />;
      case "ContactInquiries":
        return <ContactInquiries Inquiries={ContactInquiryData} />;
      default:
        return <NotFound />;
    }
  };

  const logout = () => {
     //log out methods
      localStorage.removeItem('user_key');
      window.location.reload();
  }

  return (
    <>
      <div className="megaContainer">
        <Sidemenu selected={selected} setSelected={setSelected} />
        <div className="logout-btn">
          <button onClick={logout}>Logout &nbsp;<CgLogOut/></button>
          
        </div>
        {selected ? showComponent() : ""}
      </div>
      
    </>
  );
};

const mapStateToProps = (state) => ({ inquiryState: state.inquiryState });

const mapDispatchToProps = (dispatch) => ({
  fetchInquiries: () => dispatch(fetchInquiries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
