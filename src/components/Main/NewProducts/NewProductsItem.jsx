import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

export default function NewProductsItem({ product }) {
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
    <article key={product.id} className="new-item">
      <div className="new-item-img-wrap">
        <img src={product.image} alt={product.name} draggable={false} />
        <span className="hover">
          <img
            src={product.image_hover}
            alt={product.name + "hover"}
            draggable={false}
          />
        </span>
      </div>
      <div className="new-item-info">
        <span className="brand">8 seconds</span>
        <span className="name">{product.name}</span>
        <span className="price">{product.price.toLocaleString()}</span>
        <div>
          <button
            className={`add-btn ${heart ? "active" : ""}`}
            onClick={() => {
              toggleCartHandler();
            }}
          ></button>
        </div>
      </div>
    </article>
  );
}
