import { Link } from 'react-router-dom';
import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);

    return (
        <nav>
            <div className='nav-center'>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <Link to="/cart">
                    <div className='nav-container'>
                        <CartIcon />
                        <div className='amount-container'>
                            <p className='total-amount'>{amount}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </nav >
    );
};
export default Navbar;