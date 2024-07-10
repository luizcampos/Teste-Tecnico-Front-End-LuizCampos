import React, { useContext } from "react";
import propTypes from 'prop-types';

import { BsCartXFill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";


import "./CartItem.css";
import formatCurrency from "../../functions/formatCurrency";
import AppContext from "../../context/AppContext";


function CartItem({ data }) {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price, priceCart, qtde } = data;
    

    // Remover um item do carrinho e atualizar o localStorage
    const removeItemFromCart = () => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const increaseQtde = (item) => {        
        let newQtde = data.qtde+=1; //já altera
        let newPriceCart = data.priceCart=parseFloat((data.price*data.qtde).toFixed(3)); //já altera

        //altera a qtde e valor do item que tem o botão clicado (altera o estado do elemento visual)
        setCartItems(cartItems => cartItems.map((data, i) =>
            i === data ? { ...data, qtde: newQtde, priceCart: newPriceCart } : data ));

        console.log(data)
    }

    const decreaseQtde = (item) => {     
        let newQtde;
        if (data.qtde!=1) //menor que 1 para
            newQtde = data.qtde-=1;
        let newPriceCart = data.priceCart=parseFloat((data.price*data.qtde).toFixed(3));

        setCartItems(cartItems => cartItems.map((data, i) =>
                i === data ? { ...data, qtde: newQtde, priceCart: newPriceCart  } : data ));
    }

    return (
        <section className="cart-item">
            <div className="box-description">
                <img src={thumbnail} alt="Imagem do produto" className="cart-item-image"/>
                <div className="cart-item-content">
                    <h3 className="cart-item-title">{id}</h3>
                    <h3 className="cart-item-title">{title}</h3>
                    <h5 className="cart-item-priceCart">{formatCurrency(priceCart, 'BRL')}</h5>
                    <h3 className="cart-item-priceOriginal">Preço unitário: {formatCurrency(price, 'BRL')}</h3>
                </div>
            </div>
            
            <div className="cart-item-content box-action">
                <div className="qtdeBox">
                    <button type="button" className="subtrairIcon btnIcon" onClick={ () => decreaseQtde(data) }>
                        <AiFillMinusCircle style={{color: '#d83232'}} className="subtrairIcon" />
                    </button>
                    <h3 className="cart-item-title">{qtde}</h3>
                    <button type="button" className="somarIcon btnIcon" onClick={ () => increaseQtde(data) }>
                        <AiFillPlusCircle style={{color: '#40c652'}} />
                    </button>
                </div>
            </div>
            <div className="cart-item-content box-action">
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