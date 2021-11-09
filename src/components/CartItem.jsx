import React from 'react'
import errorIcon from '../assets/img/error-icon.png'
import {useHistory} from "react-router-dom"

const CartItem = ({user}) => {

    const normalizeBirthday = (user) => {
        let normalize = (new Date(user.birthday).toLocaleDateString('en-EN'))
        let day = normalize.split('/')
        let currentYear = new Date().getFullYear()
        let birthdayDate = new Date(currentYear, day[0] - 1, day[1])
        let now = new Date().valueOf()
        const sortDay = () => {
            if (birthdayDate.valueOf() < now) {
                return  new Date(birthdayDate.setFullYear(currentYear + 1)).toLocaleDateString('en-EN')
            }
            return new Date(birthdayDate.valueOf()).toLocaleDateString('en-EN')
        }
        return sortDay()
    }

    const normalizeDate = (date) => {
        let refactorDate = new Date(date).toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'})
        return refactorDate
    }

    const router = useHistory()

    return (
        <>
            <div className='CardItem'>

                <div onClick={() => router.push(`/profile/${user.id}`)}>

                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={user.avatarUrl ? user.avatarUrl : errorIcon} alt={user.firstName} />
                        </div>
                        <div className="user-info">
                            <h3>{user.firstName}&nbsp;{user.lastName}&nbsp;<span>{user.userTag}</span></h3>
                            <p>{user.position}</p>
                        </div>
                    </div>
                </div>
                <div className="date">
                    <p>{normalizeDate(normalizeBirthday(user))}</p>
                </div>
            </div>

            {/*<div className="nearest-date">*/}
            {/*    <h2>2022</h2>*/}
            {/*</div>*/}
        </>
    )
}

export default CartItem