import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch()
  function ShowCartHandler(){
    dispatch(cartActions.cartShow())
  }
  return (
    <button className={classes.button} onClick={ShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
