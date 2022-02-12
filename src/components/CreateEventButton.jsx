import plusimg from '../assets/plus.svg'
import React from 'react';

export default function CreateEventButton() {

    return (
        <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
            <img src={plusimg} alt="plus-img" className='w-7 h-7' />
            <span className='pl-3 pr-7'>
                Create
            </span>
        </button>
    )
}
