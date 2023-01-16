import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
const stripePromise = loadStripe(
  `pk_test_51MPvqQISTOrrumfMqiGlKo1MAGp9wHRHT8W1rmdHvsWCAYf51a50yJK5ZeUgpw0hnI0HNJgGBlHBIFINuKLOf7Ph00sNY7Ls6W`
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //esta parte le envia el metodo de pago que tiene un id especial
      const { id } = paymentMethod;

      const { data } = await axios.post(`http://localhost:3001/checkout`, {
       // id o nombre del cliente 
    
        // email donde se enviara el recibo
        receipt_email: "miguizindex@gmail.com",
         // el id del metodo de pago que utilizo esto es parte de stripe
        id: id,
        // la cantidad del objeto que cuesta
        amount: 10000,
        // la descripcion del objeto que va a comprar
        description: "asdhasdjkashdja",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Buy</button>
    </form>
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
