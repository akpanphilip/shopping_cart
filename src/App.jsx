import { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar } from './index';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;