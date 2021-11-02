import React from 'react'
import CartItem from "./CartItem"
import Search from "../assets/img/search.png"

const CartList = ({users}) => {
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