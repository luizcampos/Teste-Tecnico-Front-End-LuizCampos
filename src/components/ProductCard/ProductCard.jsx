import React, { useContext, useEffect } from "react";
import propTypes from 'prop-types';

import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa";
import formatCurrency from "../../functions/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {

    const { title, thumbnail, price, seller } = data;

    const { cartItems, setCartItems } = useContext(AppContext);

    let auxId = 0;
    
    // Função para carregar itens do localStorage
    const loadCartItems = () => {
        const savedItems = localStorage.getItem('cartItems');
        if (savedItems) {
            setCartItems(JSON.parse(savedItems));
        }
    };

    // Carregar itens ao montar o componente
    useEffect(() => {
        loadCartItems();
    }, []);

    // Adicionar um item ao carrinho e atualizar o localStorage
    const addItemToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <section className="product-card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} className="card_image"/>
            <div className="card_infos">
                <h2 className="card_title">{title}</h2>
                <h4 className="card_seller">{seller.nickname}</h4>
                <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
            </div>
            <button type="button" className="button_add-cart" onClick={() => addItemToCart({ id: Date.now(), thumbnail: thumbnail.replace(/\w\.jpg/gi, 'W.jpg'), title: title, price: price, priceCart: price, qtde: 1})}>
                <FaCartPlus />
            </button>
        </section>
    )   
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;