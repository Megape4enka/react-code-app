import React from 'react'
import Avatar from '../../assets/img/Avatar.png'
import Search from '../../assets/img/search.png'
import Error from '../../assets/img/error.png'
import {Link} from "react-router-dom"

const CartBlock = () => {
    
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
        <div className='CardList' >
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>

            <div className="nearest-date">
                <h2>2012</h2>
            </div>

            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
            <div className='CardItem'>
                <Link to='/profile'>
                    <div className='CardInfo'>
                        <div className="img-icon">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="user-info">
                            <h3>Alisa&nbsp;<span>an</span></h3>
                            <p>Analyst Team Lead</p>
                        </div>
                    </div>
                </Link>
                <div className="date">
                    <p>5 июнь</p>
                </div>
            </div>
        </div>
    )
}

export default CartBlock