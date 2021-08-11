import React from "react";
import { useState, useEffect } from "react";

import Sidemenu from "./components/Sidemenu";

import { fetchInquiries } from "./redux";
import { fetchContactInquiries } from './redux';

import { connect } from "react-redux";

import {CgLogOut} from 'react-icons/cg';
import "./App.css";

import ContactInquiries from "./components/ContactInquiries";
import Inquiries from "./components/Inquiries";

const NotFound = () => {
  return <div>NotFound</div>;
};

const App = ({fetchInquiries, inquiryState, fetchContactInquiries, contactInquiryState}) => {
  const [selected, setSelected] = useState("Inquiries");

  useEffect(() => {
    fetchInquiries();
    fetchContactInquiries();
  }, []);

  const showComponent = () => {
    switch (selected) {
      case "Inquiries":
        return <Inquiries Inquiries={inquiryState.inquiries} />;
      case "ContactInquiries":
        return <ContactInquiries Inquiries={contactInquiryState.contactInquiries} />;
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

const mapStateToProps = (state) => ({ inquiryState: state.inquiryState, contactInquiryState: state.contactInquiryState });

const mapDispatchToProps = (dispatch) => ({
  fetchInquiries: () => dispatch(fetchInquiries()),
  fetchContactInquiries: () => dispatch(fetchContactInquiries())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
