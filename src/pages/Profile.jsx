import React from 'react'
import {Link, useParams} from "react-router-dom"

const Profile = ({cartItem}) => {
    const { id } = useParams()
    const user = cartItem.find(user => (user.id).toString() === id)

    const userAge = (age) => {
        let dateNow = new Date()
        let userBirthday = new Date(age)

        let t = userBirthday.getTime() / 86400000 / 365
        let  dateNowMills = dateNow.getTime() /86400000 / 365
        return Math.abs(Math.round((t - dateNowMills)))
    }

    const declination = (age) => {
        const num = age % 10
        if (num === 1) return 'год'
        if (age === 5 || age === 6 || age === 7 ||
            age === 8 || age === 9 || age === 10 ||
            age === 11 || age === 12 || age ===13 ||
            age === 14 || age === 15 || age === 16 ||
            age === 17 || age === 18 || age === 19 ||
            age === 20) return 'лет'
        if (num === 2 || num === 3 || num === 4) return 'года'
        if (num === 0 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9) return 'лет'
    }

    const normalizeDate = (date) => {
        let refactorDate = new Date(date).toLocaleDateString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'})
        return refactorDate.split(' ').slice(0, -1).join(' ')
    }

    return (
        <div className='Profile'>
            <Link to='/'>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.29 12l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41L11.29 12z" fill="#303034"/>
                </svg>
            </Link>
            <div className="info">
                <div className="info-container">
                    <div className="img-icon">
                        <img src={user.avatarUrl} alt="avatar" />
                    </div>
                    <div className="user-info">
                        <h3>{user.firstName} {user.lastName}&nbsp;<span>{(user.userTag).toLowerCase()}</span></h3>
                        <p>{user.position}</p>
                    </div>
                </div>
            </div>
            <div className="birthDay">
                <div className="age">
                    <p>{normalizeDate(user.birthday)}</p>
                    <span>{userAge(user.birthday)} {declination(userAge(user.birthday))}</span>
                </div>
                <div className="number">
                    <a href='tel:user.phone'><p>{user.phone}</p></a>
                </div>
            </div>
        </div>
    )
}

export default Profile