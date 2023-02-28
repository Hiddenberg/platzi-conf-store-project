import { Link } from "react-router-dom";
import "../styles/components/Checkout.css";

export default function Checkout() {
   return (
      <div className="Checkout">
         <div className="Checkout-content">
            <h3>Lista de Pedidos:</h3>
            <div className="Checkout-item">
               <div className="Checkout-element">
                  <h4>ITEM name</h4>
                  <span>$21</span>
               </div>

               <button title="delete item" type="button">
                  <i className="fas fa-trash-alt" />
               </button>
            </div>
         </div>

         <div className="Checkout-sidebar">
            <h3>Precio total: $21</h3>
            <Link to="/checkout/information">
               <button type="button">Continuar pedido</button>
            </Link>
         </div>
      </div>
   );
}
