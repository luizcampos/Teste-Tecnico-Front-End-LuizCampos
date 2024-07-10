import React from 'react';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import Provider from '../../context/Provider';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <Provider>
      <Header/>
      <Products/>
      <Footer/>
    </Provider>
  );
}

export default Home;
