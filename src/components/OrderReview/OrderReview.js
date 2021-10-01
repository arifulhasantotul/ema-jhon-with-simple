import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
   const [products] = useProducts();
   const [cart, setCart] = useCart(products);

   const removeItem = (key) => {
      const newCart = cart.filter((product) => product.key !== key);
      setCart(newCart);
      deleteFromDb(key);
   };

   return (
      <div className="shop-container">
         <div className="product-container">
            {cart.map((product) => (
               <ReviewItem
                  key={product.key}
                  product={product}
                  handleRemove={removeItem}
               ></ReviewItem>
            ))}
         </div>
         <div className="cart-container">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default OrderReview;
