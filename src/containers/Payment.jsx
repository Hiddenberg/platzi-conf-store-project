import "../styles/components/Payment.css";

export default function Payment() {
   return (
      <div className="Payment">
         <div className="Payment-content">
            <h3>Resumen del pedido:</h3>
            <div className="Payment-button">
               Boton de pago con PayPal
            </div>
         </div>
      </div>
   );
}
