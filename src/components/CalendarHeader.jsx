import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import logo from '../assets/logo.png';
import GlobalContext from '../context/GlobalContext';
export default function CalendarHeader() {
    const {monthIndex,setMonthIndex} = useContext(GlobalContext);
    function handlePrevMonth(){
        setMonthIndex(monthIndex-1);
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex+1);
    }
    function handleToday(){
        setMonthIndex(dayjs().month())
    }
    return (
        <header className='px-4 py-2 flex items-center'>
            <img src={logo} alt="calendar" childrenlassname='mt-2 w-12 h-12' />
            <h1 className='mx-10 text-xl text-gray-500 font bold'>
                Calendar</h1>
            <button className="rounded py-2 px-4 mr-5" onClick={handleToday}>
                Today
            </button>
            <div className='flex space-x-5'>
                <LeftOutlined onClick={handlePrevMonth}/>
                <RightOutlined onClick={handleNextMonth} />
            </div>
        <h2 className='ml-4 text-xl text-gray-500 font-bold'> 
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMM YYYY")}
        </h2>

        </header>
    )
}