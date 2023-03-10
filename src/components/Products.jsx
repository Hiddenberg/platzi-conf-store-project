import { useContext } from "react";
import AppContext from "../context/AppContext";
import Product from "./Product";
import "../styles/components/Products.css";


export default function Products() {
   const {state: {products}, addToCart} = useContext(AppContext);

   const handleAddToCart = product => {
      addToCart(product);
   };
   return (
      <div className="Products">
         <div className="Products-items">
            {products.map(product => (
               <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
            ))}
         </div>
      </div>
   );
}