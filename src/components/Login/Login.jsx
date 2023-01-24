import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// axios
// .post(
//   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6dI5xg7TXQkd5qW2wlmBB-p7vZ9CFHPo",
//   backendData
// )
// .then((res) => {
//   localStorage.setItem("auth", res.data.idToken);
//   setIsLoggedIn(true);
// })
// .catch((err) => {
//   console.log(err);

//   setError(true);
// });
// };
const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    age: "",
  });

  const [inValid, setInValid] = useState(false);

  const { email, password } = form;
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Validate");
      setInValid(email.includes("@") && password.length >= 6);
    }, 1000);

    return () => {
      console.log("Clear timeout");
      clearTimeout(timeout);
    };
  }, [email, password]);

  const getValueFromInputHandler = (e) => {
    setForm((prevValue) => {
      return {
        ...prevValue,

        [e.target.name]: e.target.value,
      };
    });

    props.onCheckValid(true);
  };

  const submitHandler = () => {
    props.onLogin(email, password);
  };

  return (
    <Card className={classes.login}>
      {props.isLoggedin && <p>Email or Password is invalid</p>}

      <form autoComplete="off">
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="off"
            // value={form.email}
            onChange={getValueFromInputHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            // value={form.password}
            onChange={getValueFromInputHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.btn}
            onClick={submitHandler}
            disabled={!inValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
