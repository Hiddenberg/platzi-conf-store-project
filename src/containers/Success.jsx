import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Success.css";
import Map from "../components/Map";

export default function Success() {
   const { state: {buyer} } = useContext(AppContext);

   
   return (
      <div className="Succcess">
         <div className="Success-content">
            <h2>{buyer.name}, Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias con la direccion</span>
            <div className="Success-map">
               <Map />
            </div>
         </div>
      </div>
   );
}
