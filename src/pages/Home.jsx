import React, {useMemo, useState} from 'react'
import Categories from '../components/Categories'
import CartList from '../components/CartList'
import UserFilter from '../components/UserFilter'
import Loader from "../components/UI/Loader/Loader"

const Home = ({cartItem, userError, isUsersLoading}) => {
    const [filter, setFilter] = useState({sort: 'firstName', query: ''})

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

            {isUsersLoading
                ? <Loader />
                : <CartList users={sortedAndSearchedPosts} useError={userError} />
            }
        </div>
    )
}

export default Home