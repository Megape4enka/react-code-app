import React, {useState} from 'react'
import Close from "../assets/img/close.png";

const Input = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Введи имя, тег, почту...'
            />
            <svg className='img-search' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 110-14 7 7 0 010 14z" fill="#C3C3C6"/>
            </svg>
            <svg onClick={toggleModal} className='img-list' width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 6a1 1 0 100 2 1 1 0 000-2zm4 2h14a1 1 0 100-2h-14a1 1 0 000 2zm0 3a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm10-5h-10a1 1 0 000 2h10a1 1 0 000-2zm0 5h-6a1 1 0 000 2h6a1 1 0 000-2z" fill="#C3C3C6"/>
            </svg>

            {modal && (
                <div className='overlay' onClick={toggleModal}>
                    <div className='sort-popup' onClick={e => e.stopPropagation()}>
                        <div className='title'>
                            <h3>Сортировка</h3>
                            <img onClick={toggleModal} src={Close} alt="close"/>
                        </div>
                        <div className='label'>
                            <input onChange={() => {}} type="radio" name='sort' id='alphabet' checked/>
                            <label htmlFor="alphabet">По алфавиту</label>
                        </div>

                        <div className='label'>
                            <input onChange={() => {}} type="radio" name='sort' id='birthday'/>
                            <label htmlFor="birthday">По дню рождения</label>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Input