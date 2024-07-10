import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../functions/formatCurrency";


function Cart() {

    const { cartItems, setCartItems } = useContext(AppContext); //array com todas as infos dos produtos adicionados ao carrinho

    //vai acumuladando -> acc é acumulator
    const totalPrice = cartItems.reduce((acc, item) => parseFloat(item.price) + parseFloat(acc), 0);

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

    return (
        <section className="cart">
            <div>
                <div className="cart-items">
                    { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>) }
                </div>
                <div className="cart-resume">
                    <span>Total:</span>
                    <br/>
                    {formatCurrency(totalPrice, 'BRL')}
                    <br/>
                    {totalPrice > 0 ? <span style={{color: '#40c652'}}>em até <strong>10x de {(totalPrice/10).toFixed(2)}</strong></span> : ''}
                </div>
            </div>
            
        </section>
    );
}

export default Cart;