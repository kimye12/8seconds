import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../../store/cart-slice";

export default function ClickRankingItem({ product, num }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const heart = cartItems.find((item) => item.id === product.id);

  function toggleCartHandler() {
    dispatch(
      cartActions.toggleItemInCart({
        id: product.id,
        name: product.name,
        price: product.price,
      })
    );
  }

  return (
    <article key={product.id} className="click-item">
      <span className="num">{num + 1}</span>
      <div className="click-item-img-wrap">
        <img src={product.image} alt={product.name} draggable={false} />
        <span className="hover">
          <img
            src={product.image_hover}
            alt={product.name + "hover"}
            draggable={false}
          />
        </span>
        <div className="click-item-info">
          <span className="brand">8 seconds</span>
          <span className="name">{product.name}</span>
          <span className={`${product.sale ? "price-cut" : "price"}`}>
            {product.price.toLocaleString()}
          </span>
          <div className="sale-box">
            {product.sale && <span className="sale">{product.sale}</span>}
            {product.sale_price && (
              <span className="sale-price">{product.sale_price}</span>
            )}
          </div>
          <div>
            <button
              className={`add-btn ${heart ? "active" : ""}`}
              onClick={() => {
                toggleCartHandler();
              }}
            ></button>
          </div>
        </div>
      </div>
    </article>
  );
}
