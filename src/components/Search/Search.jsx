import React,  { useState, useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import "./Search.css";
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function Search() {

    const [searchValue, setSearchValue] = useState('');

    const { setProducts, setLoading } = useContext(AppContext);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false); //depois de carregar os produtos
        setSearchValue('');
    };

    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input type="search" value={searchValue} placeholder="Buscar produtos" className="search__input" required onChange={ ({target}) => setSearchValue(target.value) }/>
            <button type='submit' className='search__button'>
                <IoSearchOutline/>
            </button>
        </form>
    )
}

export default Search;