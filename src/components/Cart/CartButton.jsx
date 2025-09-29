import { uiActions } from "../../store/ui-slice";

import { useDispatch, useSelector } from "react-redux";

export default function CartButton() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="" onClick={toggleCartHandler}>
      <span className="">{cartQuantity}</span>
    </button>
  );
}
