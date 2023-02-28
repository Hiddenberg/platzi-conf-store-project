import { Link } from "react-router-dom";
import "../styles/components/Header.css";


export default function Header() {
   return (
      <header className="Header">
         <Link to="/">
            <h1 className="Header-title">PlatziConf Store</h1>
         </Link>

         <div className="Header-checkout">
            <Link to="/checkout">
               <i className="fas fa-shopping-basket" />
            </Link>
         </div>
      </header>
   );
}
