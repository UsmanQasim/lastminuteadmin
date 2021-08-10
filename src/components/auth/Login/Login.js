import React from "react";
import { useState } from "react";

import styles from "./Login.module.css";

import { fetchUsers } from "../../../redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import { SECRET_KEY } from "../../utils/secrets";

const Login = ({ userState, fetchUsers }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const matchedUsers = userState.users.filter((user) => {
      if (
        user.name.toLowerCase() === username.toLowerCase() &&
        user.password === password
      )
        return true;
      else return false;
    });

    if (matchedUsers.length === 0) {
      setError("Invalid Email OR Password");
    } else {
      let user_key = `${SECRET_KEY}_${matchedUsers.id}`;
      localStorage.setItem("user_key", user_key);
      alert("You've transcended");
      window.location.reload();
      // //log out methods
      // localStorage.removeItem('user_key');
      // window.location.reload();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.formContainer}>
        {error ? <div className={styles.error}>{error}</div> : ""}
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <button onClick={submitHandler} className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ userState: state.userState });

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
