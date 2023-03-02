import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/components/Information.css";

export default function Information() {
   const {state: {cart}, addToBuyer} = useContext(AppContext);
   const formRef = useRef(null);
   const navigate = useNavigate();

   const handleSubmit = () => {
      const formData = new FormData(formRef.current);

      /* const buyer = {
         name: formData.get("name"),
         email: formData.get("email"),
         address: formData.get("address"),
         apto: formData.get("apto"),
         city: formData.get("city"),
         state: formData.get("state"),
         country: formData.get("country"),
         cp: formData.get("cp"),
         phone: formData.get("phone"),
      }; */

      // ↓ A better way to create the buyer object
      const buyer = Object.fromEntries(formData);

      addToBuyer(buyer);
      navigate("/checkout/payment");
   };

   return (
      <div className="Information">
         <div className="Information-content">
            <div className="Information-head">
               <h2>Informacion de contacto:</h2>
               <div className="Information-form">
                  <form method="post" ref={formRef}>
                     <input type="text" name="name" placeholder="Nombre Completo" />
                     <input type="email" name="email" placeholder="Correo Electronico" />
                     <input type="text" name="address" placeholder="Direccion" />
                     <input type="text" name="apto" placeholder="Apartamento" />
                     <input type="text" name="city" placeholder="Ciudad" />
                     <input type="text" name="state" placeholder="Estado" />
                     <input type="text" name="country" placeholder="Pais" />
                     <input type="text" name="cp" placeholder="Codigo Postal" />
                     <input type="tel" name="phone" placeholder="Telefono" />
                  </form>
               </div>

               <div className="Information-buttons">
                  <Link to="/checkout">
                     <div className="Information-back">Regresar</div>
                  </Link>

                  <div className="Information-next">
                     <button type="button" onClick={handleSubmit}>Pagar</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="Information-sidebar">
            <h3>Pedido:</h3>
            {cart.map(item => (
               <div key={item.cartId} className="Information-item">
                  <div className="Information-element">
                     <h4>{item.title}</h4>
                     <span>${item.price}</span>
                  </div>
               </div>
            ))}
            <div className="Information-item" style={{borderTop: "2px solid black", marginTop:"0.5rem"}}>
               <div className="Information-element" >
                  <h4><strong>Total:</strong></h4>
                  <span><strong>${cart.reduce((prev, curr) => prev + curr.price,0)}</strong></span>
               </div>
            </div>
         </div>
      </div>
   );
}