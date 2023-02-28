import "../styles/components/Success.css";

export default function Success() {
   return (
      <div className="Succcess">
         <div className="Success-content">
            <h2>Oscar, Gracias por tu compra</h2>
            <span>Tu pedido llegara en 3 dias con la direccion</span>
            <div className="Success-map">
               google maps
            </div>
         </div>
      </div>
   );
}
