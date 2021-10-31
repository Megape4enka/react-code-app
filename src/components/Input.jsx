import React from 'react'

const Input = () => {
    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Введи имя, тег, почту...'
            />
            <svg className='img-search' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 110-14 7 7 0 010 14z" fill="#C3C3C6"/>
            </svg>
            <svg className='img-list' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 6a1 1 0 100 2 1 1 0 000-2zm4 2h14a1 1 0 100-2h-14a1 1 0 000 2zm0 3a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm10-5h-10a1 1 0 000 2h10a1 1 0 000-2zm0 5h-6a1 1 0 000 2h6a1 1 0 000-2z" fill="#C3C3C6"/>
            </svg>

        </div>
    )
}

export default Input