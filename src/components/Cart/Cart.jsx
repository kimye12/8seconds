import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <section className="cart">
      <h2>즐겨찾기</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="cart-bottom">
        <div className="totalprice">{totalPrice + "원"}</div>
        <div className="close-btn" onClick={toggleCartHandler}>
          <button>닫기</button>
        </div>
      </div>
    </section>
  );
}
