import React from 'react'
import Search from '../../assets/img/search.png'
import Error from '../../assets/img/error.png'
import {Link} from "react-router-dom"

const CartItem = ({user}) => {
    
    // if (!users.length) {
    //     return (
    //         <div className='not-found'>
    //                 <img src={Search} alt="search"/>
    //                 <h2>Мы никого не нашли</h2>
    //                 <p>Попробуй скорректировать запрос</p>
    //         </div>
    //     )


    // if (!) {
    //     return (
    //         <div className='critical-error'>
    //             <img src={Error} alt="error"/>
    //             <h2>Какой-то сверхразум все сломал</h2>
    //             <p>Постораемся быстро починить</p>
    //             <a href="#">Пробовать снова</a>
    //         </div>
    //     )
    // }


    return (
        <>
            <div className='CardItem'>
                <Link to='/profile'>

                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={user.avatarUrl} alt={user.firstName} />
                        </div>
                        <div className="user-info">
                            <h3>{user.firstName}&nbsp;{user.lastName}&nbsp;<span>{user.userTag}</span></h3>
                            <p>{user.position}</p>
                        </div>
                    </div>
                </Link>
                {/*<div className="date">*/}
                {/*    <p>{user.birthday}</p>*/}
                {/*</div>*/}
            </div>


            {/*<div className="nearest-date">*/}
            {/*    <h2>2012</h2>*/}
            {/*</div>*/}
        </>
    )
}

export default CartItem