import React, { useState } from "react";
import Button3 from "../Button3/Button3";
import s from "./Notification.module.css";
import axios from "axios";

const Notification = ({ setNotification }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setNotification(false);
    // setTimeout(() => setNotification(false), 5000)
  };

  const handleSubmit = async () => {
    console.log(state);
    await axios.post("/welcome", state);
  };

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={() => handleClick()}>
        ✖
      </button>
      <div className={s.flex}>
        <h2 className={s.title}>Suscribe to our newsletter</h2>
        <input
          className={s.email}
          type="email"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
        />
        <input
          className={s.email}
          type="name"
          placeholder="Name..."
          name="name"
          onChange={handleChange}
        />
        <div className={s.submit}>
          <Button3 handler={handleSubmit} value="Subscribe" />
        </div>
      </div>
    </div>
  );
};
// dispara la accion al precionar el boton,  que el mail que le llegue(nodemailer) le ofresca promoción y link a register
export default Notification;
