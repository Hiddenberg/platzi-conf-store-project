import {useEffect, useRef, useState} from "react";


export default function Basket({cartItemsCount}) {
   const [moving, setMoving] = useState(false);
   const prevCartCount = useRef(0);

   useEffect(() => {
      if (prevCartCount.current < cartItemsCount) {
         setMoving(true);
      }
      prevCartCount.current = cartItemsCount;
   }, [cartItemsCount]);

   return (
      <>
         <i onAnimationEnd={() => {setMoving(false)}} className={`fas fa-shopping-basket ${moving ? "move-basquet":""}`} />
         {cartItemsCount > 0 && <div className="Header-alert">{cartItemsCount}</div>}
      </>
   );
}