import React from 'react'
import Input from "../components/Input"
import Categories from "../components/Categories"
import CartItem from '../components/CartItem'

const Home = ({cartItem}) => {
    console.log(cartItem)
    return (
        <div className='home'>
            <h1>Поиск</h1>
            <Input />
            <Categories />
            <div className='CardList'>
                {
                    cartItem.map(user =>
                        <CartItem user={user} key={user.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default Home