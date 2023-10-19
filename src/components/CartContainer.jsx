import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartContainer = () => {
    const dispatch = useDispatch();

    const { cartItems, total, amount } = useSelector((state) => state.cart);

    const filteredItems = cartItems.filter((item) => item.amount !== 0);

    if (amount < 1) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h3>your bag</h3>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h3>Shopping Cart</h3>
            </header>
            {/* cart items */}
            <div>
                {filteredItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <div className="button-base">
                    <button
                        className='btn clear-btn'
                        onClick={() => {
                            dispatch(openModal());
                        }}
                    >
                        clear cart
                    </button>
                    <button
                        className='btn pay-btn'
                    >
                        pay
                    </button>
                </div>
            </footer>
        </section>
    );
};

export default CartContainer;