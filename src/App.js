import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import axios from "axios";
import { cartActions } from "./store/cart";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    async function getData() {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      try {
        const config = {
          method: "PUT",
          url: "https://e-commerce-ed719-default-rtdb.firebaseio.com/cart.json",
          data: JSON.stringify(cart),
        };
        await axios(config);
        dispatch(
          cartActions.showNotification({
            status: "success",
            title: "Success..",
            message: "Sent cart data successfully!",
          })
        );
      } catch (err) {
        dispatch(
          cartActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Sending cart data Failed!",
          })
        );
      }
    }
    if (isInitial === true) {
      isInitial=false
    } else {
      getData();
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
