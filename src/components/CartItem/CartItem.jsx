import React, { useContext } from "react";
import propTypes from 'prop-types';

import { BsCartXFill } from "react-icons/bs";

import "./CartItem.css";
import formatCurrency from "../../functions/formatCurrency";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    /*
    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
    };*/

    // Remover um item do carrinho e atualizar o localStorage
    const removeItemFromCart = () => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <section className="cart-item">
            <img src={thumbnail} alt="Imagem do produto" className="cart-item-image"/>

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button type="button" className="button-remove-item" onClick={ removeItemFromCart }>
                    <BsCartXFill />
                </button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;