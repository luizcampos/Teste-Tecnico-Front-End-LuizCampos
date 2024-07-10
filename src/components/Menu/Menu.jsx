import React,  { useState, useContext } from 'react';
import "./Menu.css";
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Menu() {

    const [searchValue, setSearchValue] = useState('');

    const { setProducts, setLoading } = useContext(AppContext);

    const changeSearch = async (searchValue) => {
        setLoading(true);

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false);
        setSearchValue('');
    };

    return (
        <menu>
            <Link to="/">       
                <li onClick={({}) => changeSearch('Games')}>Início</li>
            </Link>
            <Link to="/">    
                <li onClick={({}) => changeSearch('Consoles')}>Consoles</li>
            </Link>
            <Link to="/">  
                <li onClick={({}) => changeSearch('Jogos ps4 e ps5')}>Jogos</li>
            </Link>
        </menu>
    )
}

export default Menu;