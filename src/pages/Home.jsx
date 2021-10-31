import React from 'react'
import Input from "../components/Input"
import Categories from "../components/Categories"
import CartItem from '../components/CartBlock'
import SortPopup from "../components/SortPopup";

const Home = () => {
    return (
        <div className='home'>
            <h1>Поиск</h1>
            <Input />
            <Categories />
            <CartItem />
            {/*<SortPopup />*/}
        </div>
    )
}

export default Home