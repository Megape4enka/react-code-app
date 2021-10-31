import React from 'react'
import Close from '../../assets/img/close.png'

const SortPopup = () => {
    return (
        <div className='overlay'>
            <div className='sort-popup'>
                <div className='title'>
                    <h3>Сортировка</h3>
                    <img src={Close} alt="close"/>
                </div>
                <div className='label'>
                    <input type="radio" name='sort' id='al' value='alphabet' checked/>
                    <label htmlFor="al">По алфавиту</label>
                </div>

                <div className='label'>
                    <input type="radio" name='sort' id='bir' value='birthday'/>
                    <label htmlFor="bir">По дню рождения</label>
                </div>
            </div>
        </div>
    )
}

export default SortPopup