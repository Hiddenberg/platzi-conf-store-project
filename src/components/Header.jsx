import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";

import AppContext from "../context/AppContext";
import Basket from "./Basket";


export default function Header() {
   const {state: {cart}} = useContext(AppContext);


   return (
      <header className="Header">
         <Link to="/">
            <h1 className="Header-title">PlatziConf Store</h1>
         </Link>

         <Link className="Header-checkout" to="/checkout">
            <Basket cartItemsCount={cart.length} />
         </Link>
      </header>
   );
}
