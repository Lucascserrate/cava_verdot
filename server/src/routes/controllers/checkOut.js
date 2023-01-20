const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51MPvqQISTOrrumfM1xNcMgfPzY7nTJhBOV6QzgQD0MzQZVG9kOUqY66T1AES8ptAEWQcjUrFvksU8deBpGVCZeHF00QZLhX7U1"
);
const checkOut = async (req, res) => {
  const { id, amount, description, receipt_email, customer } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      currency: "USD",
      // customer: customer,
      amount: amount,
      description: description,
      payment_method: id,
      confirm: true,
      receipt_email,
    });
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = checkOut;
