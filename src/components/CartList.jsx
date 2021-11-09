import React from 'react'
import CartItem from "./CartItem"
import Search from "../assets/img/search.png"
import Error from "../assets/img/error.png";

const CartList = ({users, useError}) => {

    if (useError) {
        return (
        <div className='CardList'>
            <div className='critical-error'>
                <img src={Error} alt="error"/>
                <h2>Какой-то сверхразум все сломал</h2>
                <p>Постораемся быстро починить</p>
                <a href="#">Пробовать снова</a>
            </div>
        </div>
        )
    }

    if (!users.length) {
        return (
            <div className='CardList'>
                <div className='not-found'>
                    <img src={Search} alt="search"/>
                    <h2>Мы никого не нашли</h2>
                    <p>Попробуй скорректировать запрос</p>
                </div>
            </div>
        )
    }

    return (
        <div className='CardList'>
            {users.map(user =>
                <CartItem user={user} key={user.id}/>
            )}
        </div>
    )
}

export default CartList