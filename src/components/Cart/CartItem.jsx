import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    );
  };

  return (
    <li className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <div className="price-box">
          {item.totalPrice.toFixed(0) + "원"}{" "}
          <span className="price">({item.price.toFixed(0)}원/개)</span>
        </div>
      </div>
      <div className="quantity-box">
        <div className="quantity">
          x <span>{item.quantity}</span>
        </div>
        <div className="quantity-btn">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
}
