import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function PageContentItem({ product }) {
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
    <article key={product.id} className="product">
      <div className="product-img-box">
        <img src={product.image} alt={product.name} draggable={false} />
        <div className="hover">
          <img
            src={product.image_hover}
            alt={product.name + "hover"}
            draggable={false}
          />
        </div>
      </div>
      <div className="product-info">
        <p className="name">{product.name}</p>
        <p className="price">{product.price.toLocaleString()}</p>
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
