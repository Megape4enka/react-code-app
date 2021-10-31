import React, {useState} from 'react'
import Input from "../components/Input"
import Categories from "../components/Categories"
import CartItem from '../components/CartBlock'

const Home = () => {

    return (
        <div className='home'>
            <h1>Поиск</h1>
            <Input />
            <Categories />
            <CartItem />
        </div>
    )
}

export default Home