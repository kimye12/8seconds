import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://seconds-262c7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("카트 정보 불러오기를 실패했습니다.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (error) {
      throw new Error("카트 정보 추출을 실패했습니다.");
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://seconds-262c7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("카트 정보 추가를 실패했습니다.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      throw new Error("카트 정보 삽입을 실패했습니다.");
    }
  };
};
