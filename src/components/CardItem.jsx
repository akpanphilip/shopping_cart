/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { addCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { CartIcon } from '../icons';

const CardItem = ({ id, img, title, price, amount, desc }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-title">{title}</div>
      <div className="price">${price}</div>

      <div className="item-desc">
        {desc}
      </div>
      {amount == 0 ? (
        <button className="add-cart-btn" onClick={() => {
          dispatch(addCart({ id }));
        }}>add to cart</button>
      ) : (
        <button className="added-cart-btn">
          added <CartIcon />
        </button>
      )}
    </div>
  )
}

export default CardItem