import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext';
import { getMonth } from '../util'

export default function SmallCalendar() {
    const [currentMonthidx, setcurrentMonthidx] = useState(dayjs().month());
    const [currentMonth, setcurrentMonth] = useState(getMonth());
    const {monthIndex,setSmallCalendarMonth,daySelected,setDaySelected} = useContext(GlobalContext);
    useEffect(() => {
        setcurrentMonth(getMonth(currentMonthidx))
    }, [currentMonthidx]);
    useEffect(() => {
        setcurrentMonthidx(monthIndex)
    },[monthIndex])

    function handlePrevMonth() {
        setcurrentMonthidx(currentMonthidx - 1);
    }
    function handleNextMonth() {
        setcurrentMonthidx(currentMonthidx + 1);
    }
    function getDayClass(day) {
        const nowday = dayjs().format("DD-MM-YY");
        const currday = day.format("DD-MM-YY");
        const slcday = daySelected && daySelected.format("DD-MM-YY")
        if (currday === nowday){
            return "bg-blue-600 text-white rounded-full"
        }else if(currday === slcday){
            return "bg-blue-100 rounded-full text-blue-600 font bold"
        }else{
            return " ";
        }
    }

    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currentMonthidx)).format("MMM YYYY")}
                </p>
                <div className='flex space-x-8'>
                    <LeftOutlined className='text-sm' onClick={handlePrevMonth} />
                    <RightOutlined className='text-sm' onClick={handleNextMonth} />
                </div>
            </header>
            <div className="grid grid-cols-7 grid-rows-5">
                {currentMonth[0].map((day,i) => (
                    <span key = {i} className="text-sm py-1 text-center">
                        {day.format("ddd").charAt(0).toUpperCase()}
                    </span>
                ))}
                {currentMonth.map((row,i) => (
                    <React.Fragment key = {i} >
                        {row.map((day,j) => (
                            <button key={j} 
                            className = {`py-1 w-full hover:bg-gray-200 rounded-full ${getDayClass(day)}`}
                            onClick = { () => {
                                setSmallCalendarMonth(currentMonthidx);
                                setDaySelected(day)
                            }}
                            >
                                <span className='text-sm'>{day.format("D")}</span>
                            </button>
                        ))}

                        </React.Fragment>
                ))}
            </div>
        </div>
    )
}
