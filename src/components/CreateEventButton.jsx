import plusimg from '../assets/plus.svg'
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'
        onClick={() => setShowEventModal(true)}>
            <img src={plusimg} alt="plus-img" className='w-7 h-7' />
            <span className='pl-3 pr-7'>
                Create
            </span>
        </button>
    )
}
