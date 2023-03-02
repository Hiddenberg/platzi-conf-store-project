import { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

export default function Payment() {
   const {state: {cart, buyer}, addNewOrder} = useContext(AppContext);
   const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
   const navigate = useNavigate();

   const paypalOptions = {
      clientId: PAYPAL_CLIENT_ID,
      intent: "capture",
      currency: "USD",
   };
   const buttonStyles = {
      layout: 'vertical',
      shape: 'rect'
   };

   const handlePaymetSuccess = (data) => {
      console.log(data);
      if (data.status === "COMPLETED") {
         /// Create a new order...
         const newOrder = {
            buyer,
            products: cart,
            payment: data,
            total: totalPrice
         };

         addNewOrder(newOrder);
         navigate("/checkout/success");
      }
   };


   return (
      <div className="Payment">
         <div className="Payment-content">
            <h3>Resumen del pedido:</h3>
            {cart.map(item => (
               <div className="Payment-item" key={item.cartId}>
                  <div className="Payment-element">
                     <h4>{item.title}</h4>
                     <span>${item.price}</span>
                  </div>
               </div>
            ))}
            <div className="Payment-item" style={{borderTop: "2px solid black", margin: "1rem 0"}}>
               <div className="Payment-element">
                  <h4>Total:</h4>
                  <span><strong>${totalPrice}</strong></span>
               </div>
            </div>

            <div className="Payment-button">
               <PayPalButton
                  
                  options={paypalOptions}
                  style={buttonStyles}
                  amount={totalPrice}
                  onApprove={(data) => console.log(data)}
                  onSuccess={handlePaymetSuccess}
                  onError={(error)=> console.log(error)}
                  onButtonReady={data => console.log(data)}
               />
            </div>
         </div>
      </div>
   );
}
