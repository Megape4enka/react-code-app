import React from 'react'
import errorIcon from '../assets/img/error-icon.png'
import {useHistory} from "react-router-dom"

const CartItem = (props) => {

    const router = useHistory()

    return (
        <>
            <div className='CardItem'>

                <div onClick={() => router.push(`/profile/${props.user.id}`)}>

                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={props.user.avatarUrl ? props.user.avatarUrl : errorIcon} alt={props.user.firstName} />
                        </div>
                        <div className="user-info">
                            <h3>{props.user.firstName}&nbsp;{props.user.lastName}&nbsp;<span>{props.user.userTag}</span></h3>
                            <p>{props.user.position}</p>
                        </div>
                    </div>
                </div>
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