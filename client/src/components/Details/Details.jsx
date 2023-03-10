import React, { useState, useEffect } from "react";
import s from "./Details.module.css";
import NavBar from "../Navbar/Navbar";
import BubbleCart from "../BubbleCart/BubbleCart";
import Button3 from "../Button3/Button3";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { modifyBubbleCart } from "../../redux/actions";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import Ratings from '../Rating/Ratings';
import { Rating } from '@mui/material';
import Reviews from '../Reviews/Reviews';
import check from '../../assets/check.png'

const Details = () => {

  const [detail, setDetail] = useState({});
  let { id } = useParams();
  const dispatch = useDispatch();
  // const cartAmount = document.getElementById("amount");
  const [ammount, setAmmount] = useState(1);
  const bubbleCart = useSelector((state) => state.bubbleCart);
  const allReviews = useSelector(state => state.allReviews)
  const userId = useSelector(state => state.user)


  const getDetail = async () => {
    let res = await axios.get(`/products/${id}`);
    setDetail(res?.data[0]);
  };

  let user = window.localStorage.getItem("userId");

  useEffect(() => {
    getDetail();
    if (user) dispatch(modifyBubbleCart(user));
  }, [dispatch]);

  const hancdleOnChangeAmmount = (e) => {
    setAmmount(e.target.value)
  }

  const handlerAdd = async () => {
    let user = window.localStorage.getItem("userId");
    if (user) {
      let post = await axios.post("/shopingCart?add=true", {
        userId: user,
        drinkId: id,
        amount: Number(ammount),
      });
      if (Object.keys(post).length) {
        dispatch(modifyBubbleCart(user));
      }
      setAmmount(1)
      return post.data;
    } else {
      let post = await axios.post("/shopingCart?add=true", {
        drinkId: id,
        amount: Number(ammount),
      });
      window.localStorage.setItem("userId", post?.data.userId);
      let user = window.localStorage.getItem("userId");
      if (Object.keys(post).length) {
        dispatch(modifyBubbleCart(user));
      }
    }
  };

  return (
    <div className={s.details}>
      <NavBar />
      <BubbleCart />
      <div className={s.detail__elements}>
        {Object.keys(detail).length ? (
          <div className={s.container}>
            <div className={s.detail__picture}>
              <img
                className={s.img}
                src={detail.image ? detail.image : "#"}
                alt="img"
              />
            </div>
            <div className={s.detail__info}>
              <h1 className={s.name}>{detail?.name}</h1>
              <Rating name="read-only" value={detail?.rating} readOnly />
              <br />
              <div className={s.tags}>{detail.category?.category}</div>
              <p className={s.price}>${detail?.price}</p>
              <div className={s.itemsTextContainer}>
                {bubbleCart === 1 ? (
                  <p className={s.itemsText}>An item in your bag</p>
                ) : bubbleCart > 1 ? (
                  <p className={s.itemsText}>
                    {bubbleCart} items in your bag{" "}
                  </p>
                ) : undefined}
              </div>
              <div>
                <span className={s.bold}>Amount:</span>
                <input
                  id="amount"
                  className={s.inputAmount}
                  type="number"
                  defaultValue="1"
                  value={ammount}
                  onChange={hancdleOnChangeAmmount}
                  min="1"
                  maxLength="5"
                />
              </div>
              {bubbleCart ? (
                <div className={s.buttons}>
                  <ButtonPrimary
                    handler={() => handlerAdd()}
                    value="Add more"
                  />
                  <Link className={s.buttons} to="/cart">
                    {" "}
                    <Button3 value="Pay Now" />
                  </Link>
                </div>
              ) : (
                <div className={s.buttons}>
                  {" "}
                  <Button3 handler={() => handlerAdd()} value="Add" />{" "}
                </div>
              )}

              <p className={s.country}>
                <span className={s.bold}>Country:</span>{" "}
                {detail.country?.country}
              </p>
            </div>
            <div className={s.description}>{detail.description}</div>
          </div>
        ) : (
          <Loader />
        )}
        {
          allReviews.filter(e => e.userId === userId.id).length ?
            <div className={s.alertSubmited}>
              <div className={s.alertBox}>
                <img className={s.check} src={check} alt="check" />
                <p >Review submitted</p>
              </div>
            </div>
            : < Ratings id={id} />

        }
        <Reviews id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Details;
