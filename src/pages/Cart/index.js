
import Header from '../../components/Header/Header';
import Provider from '../../context/Provider';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';

import "./CartPage.css"

function CartPage() {

  
  return (
    <Provider>
      <Header/>
      <Cart/>
      <Footer/>
    </Provider>
  );
}

export default CartPage;
