import React from "react";
import s from "./ButtonArrow.module.css";

const ButtonArrow = ({ value, handler }) => {
  return (
    <>
      <button className={s.btn} onClick={handler}>
        <p>{value}</p>
        <svg
          strokeWidth="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default ButtonArrow;
