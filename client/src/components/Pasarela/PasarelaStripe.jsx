import React, { useEffect, useState } from "react";
import s from "./PasarelaStripe.module.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { parseJwt } from '../../functions/parseTokenJwt';



const stripePromise = loadStripe(
  `pk_test_51MPvqQISTOrrumfMqiGlKo1MAGp9wHRHT8W1rmdHvsWCAYf51a50yJK5ZeUgpw0hnI0HNJgGBlHBIFINuKLOf7Ph00sNY7Ls6W`
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // obtengo el token
  const getToken = window.localStorage.getItem("token");

  // guardamos la decodificacion del token
  const [decodingToken, setDecodingToken] = useState()

  useEffect(() => {
    if (getToken) {
      setDecodingToken(parseJwt(getToken))
    }
  }, [getToken])

  // traemos los datos del carrito
  const stateCart = useSelector(state => state.cart);

  // const user = useSelector(state => state.user) este esta harcodeado

  // console.log( "soy el USer ",user);

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    if (stateCart.length) {


      setPrice(stateCart.reduce((acc, e) => {
        return acc + e.subtotal;
      }, 0));

      setDescription(stateCart.map(ele => {
        console.log('soy elemento' ,ele);
        const obj = { 
          userId: decodingToken?.id,
          id: ele.id,          
          amount: ele.amount,
          subtotal: ele.subtotal
        }
        
        
        return obj;
      }))
    }
  }, [stateCart]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!getToken) {
      navigate("/login")
    } else {
      if (!error) {
        //esta parte le envia el metodo de pago que tiene un id especial
        const { id } = paymentMethod;
        console.log(id);
        const { data } = await axios.post(`/checkout`, {
          // id o nombre del cliente
          // customer: "padermo",
          // email donde se enviara el recibo
          receipt_email: decodingToken?.email,
          // el id del metodo de pago que utilizo esto es parte de stripe
          id: id,
          // la cantidad del objeto que cuesta
          amount: price * 100,
          // la descripcion del objeto que va a comprar
          description: "pago exitoso",
        });
        console.log(data);
      }
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={s.label}>Set your payment method</h2>
        <CardElement className={s.input} />
        <button className={s.btn}>Buy</button>
      </form>
    </div>
  );
};
function PasarelaStripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
}

export default PasarelaStripe;
