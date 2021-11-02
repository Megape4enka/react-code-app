import React, {useState} from 'react'
import Close from "../assets/img/close.png"

const RadioSort = ({value, options, onChange}) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className='btn-sort'>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6a1 1 0 100 2 1 1 0 000-2zm4 2h14a1 1 0 100-2h-14a1 1 0 000 2zm0 3a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm10-5h-10a1 1 0 000 2h10a1 1 0 000-2zm0 5h-6a1 1 0 000 2h6a1 1 0 000-2z" fill="#C3C3C6"/>
                </svg>
            </button>


            <select
                style={{position: 'absolute', left: '300px'}}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value} >
                        {option.name}
                    </option>
                )}
            </select>

            {modal && (
                <div className='overlay' onClick={toggleModal}>
                    <div className='sort-popup' onClick={e => e.stopPropagation()}>
                        <div className='title'>
                            <h3>Сортировка</h3>
                            <img onClick={toggleModal} src={Close} alt="close"/>
                        </div>

                        <div className='label' >
                            <input onChange={() => {}} type="radio" name='sort' id='alphabet' checked/>
                            <label htmlFor="alphabet">По алфавиту</label>
                        </div>

                        <div className='label' >
                            <input onChange={() => {}} type="radio" name='sort' id='birthday'/>
                            <label htmlFor="birthday">По дню рождения</label>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default RadioSort