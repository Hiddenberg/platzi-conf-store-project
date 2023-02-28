import { Link } from "react-router-dom";

import "../styles/components/Information.css";

export default function Information() {
   return (
      <div className="Information">
         <div className="Information-content">
            <div className="Information-head">
               <h2>Informacion de contacto:</h2>
               <div className="Information-form">
                  <form action="" method="post">
                     <input type="text" name="name" placeholder="Nombre Completo" />
                     <input type="email" name="email" placeholder="Correo Electronico" />
                     <input type="text" name="address" placeholder="Direccion" />
                     <input type="text" name="apto" placeholder="Apartamento" />
                     <input type="text" name="city" placeholder="Ciudad" />
                     <input type="text" name="country" placeholder="Pais" />
                     <input type="text" name="cp" placeholder="Codigo Postal" />
                     <input type="tel" name="phone" placeholder="Telefono" />
                  </form>
               </div>

               <div className="Information-buttons">
                  <div className="Information-back">Regresar</div>
                  <Link to="/checkout/payment">
                     <div className="Information-next">Pagar</div>
                  </Link>
               </div>
            </div>
         </div>

         <div className="Information-sidebar">
            <h3>Pedido:</h3>
            <div className="Information-item">
               <div className="Information-element">
                  <h4>ITEM name</h4>
                  <span>$10</span>
               </div>
            </div>
         </div>
      </div>
   );
}