import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Checkout.css";

export default function Checkout() {
   const {state: {cart}, removeFromCart} = useContext(AppContext);
   
   const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
   const itemsInCart = cart.length > 0;

   return (
      <div className="Checkout">
         <div className="Checkout-content">
            {itemsInCart ?
               <h3>Lista de Pedidos:</h3> :
               <h3>Sin articulos en el carrito</h3>
            }
            {itemsInCart && 
               cart.map(cartItem => (
                  <div className="Checkout-item" key={cartItem.cartId}>
                     <div className="Checkout-element">
                        <h4>{cartItem.title}</h4>
                        <span>${cartItem.price}</span>
                     </div>

                     <button onClick={() => removeFromCart(cartItem)} title="delete item" type="button">
                        <i className="fas fa-trash-alt" />
                     </button>
                  </div>
               ))
            }
         </div>

         {itemsInCart &&
            <div className="Checkout-sidebar">
               <h3>Precio total: ${totalPrice}</h3>
               <Link to="/checkout/information">
                  <button type="button">Continuar pedido</button>
               </Link>
            </div>
         }
      </div>
   );
}
