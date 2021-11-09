import React, {useMemo, useState} from 'react'
import Categories from '../components/Categories'
import CartList from '../components/CartList'
import UserFilter from '../components/UserFilter'
import Loader from "../components/UI/Loader/Loader"
import Error from '../assets/img/error.png'

const Home = ({cartItem, userError, isUsersLoading}) => {
    const [filter, setFilter] = useState({sort: 'firstName', query: ''})

    // const sortBirthday = () => {
    //     const sorts = cartItem.map(data => {
    //         let normalize = (new Date(data.birthday).toLocaleDateString('en-EN'))
    //         let day = normalize.split('/')
    //         let currentYear = new Date().getFullYear()
    //         let birthdayDate = new Date(currentYear, day[0] - 1, day[1])
    //         let now = new Date().valueOf()
    //         const sortDay = () => {
    //             if (birthdayDate.valueOf() < now) {
    //                 return  new Date(birthdayDate.setFullYear(currentYear + 1)).toLocaleDateString('en-EN')
    //             }
    //             return new Date(birthdayDate.valueOf()).toLocaleDateString('en-EN')
    //         }
    //         return sortDay()
    //     })
    //     return sorts
    // }

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...cartItem].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return cartItem
    }, [filter.sort, cartItem])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            post.userTag.toLowerCase().includes(filter.query) ||
            post.lastName.toLowerCase().includes(filter.query) ||
            post.firstName.toLowerCase().includes(filter.query)
        )
    }, [filter.query, sortedPosts])

    return (
        <div className='home'>
            <h1>Поиск</h1>
            <UserFilter filter={filter} setFilter={setFilter} />
            <Categories />

            {userError &&
                <div className='CardList'>
                    <div className='critical-error'>
                        <img src={Error} alt="error"/>
                        <h2>Какой-то сверхразум все сломал</h2>
                        <p>Постораемся быстро починить</p>
                        <a href="#">Пробовать снова</a>
                    </div>
                </div>
            }

            {isUsersLoading
                ? <Loader />
                : <CartList users={sortedAndSearchedPosts} />
            }
        </div>
    )
}

export default Home