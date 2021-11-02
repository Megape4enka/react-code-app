import React from 'react'
// import Error from '../assets/img/error.png'
import errorIcon from '../assets/img/error-icon.png'
import {Link} from "react-router-dom"

const CartItem = (props) => {


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
                            <img src={props.user.avatarUrl ? props.user.avatarUrl : errorIcon} alt={props.user.firstName} />
                        </div>
                        <div className="user-info">
                            <h3>{props.user.firstName}&nbsp;{props.user.lastName}&nbsp;<span>{props.user.userTag}</span></h3>
                            <p>{props.user.position}</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>{props.user.birthday}</p>
                </div>
            </div>

            {/*<div className="nearest-date">*/}
            {/*    <h2>2022</h2>*/}
            {/*</div>*/}
        </>
    )
}

export default CartItem