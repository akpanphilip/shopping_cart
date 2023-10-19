import CardItem from './CardItem';
import { useSelector } from 'react-redux';
const Home = () => {
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <section className='cart'>
            <header>
                <h3>Items</h3>
            </header>
            <div className="card-items">
                {cartItems.map((item) => {
                    return <CardItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
            </footer>
        </section>
    )
}

export default Home     