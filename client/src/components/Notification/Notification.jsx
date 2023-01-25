import React, { useState } from "react";
import Button3 from "../Button3/Button3";
import s from "./Notification.module.css";
import axios from "axios";
import "./Notification.css";

const Notification = ({ setNotification }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const [viewMailer, setViewMailer] = useState("hiddenMailer");
  const [viewAlert, setViewAlert] = useState()

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // setNotification(false);
    setViewMailer("hiddenMailer");
    // setTimeout(() => setNotification(false), 5000)
  };

  const handleSubmit = async () => {
    console.log(state);
    await axios.post("/welcome", state);
    setViewAlert(<p className={s.ok}>Thanks for subscribing</p>)
    setState({
      name: "",
      email: "",
    });
    setTimeout(()=>{
      setViewAlert()
    },1000)
  };

  const handleViewMailer = () => {
    setViewMailer("showMailer");
  };

  return (
    <div className="notification__content">
      <button className={`notification__bubble`} onClick={handleViewMailer}>
        <span className="material-symbols-outlined">mail</span>
      </button>
      <div className={`${s.container} ${viewMailer}`}>
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
            value={state.email}
            onChange={handleChange}
          />
          <input
            className={s.email}
            type="name"
            placeholder="Name..."
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <div className={s.submit}>
            <Button3 handler={handleSubmit} value="Subscribe" />
          </div>
          <div className={s.alert}>
            {viewAlert && viewAlert}
          </div>
        </div>
      </div>
    </div>
  );
};
// dispara la accion al precionar el boton,  que el mail que le llegue(nodemailer) le ofresca promoción y link a register
export default Notification;
