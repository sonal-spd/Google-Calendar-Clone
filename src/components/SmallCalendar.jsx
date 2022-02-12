import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { getMonth } from '../util'

export default function SmallCalendar() {
    const [currentMonthidx,setcurrentMonthidx] = useState(dayjs().month())
    const [currentMonth,setcurrentMonth] = useState(getMonth())
    useEffect(() => {
        setcurrentMonth(getMonth(currentMonthidx))
    },[currentMonthidx]);

    function handlePrevMonth(){
        setcurrentMonthidx(currentMonthidx-1);
    }
    function handleNextMonth(){
        setcurrentMonthidx(currentMonthidx+1);
    }
  return (
    <div className='mt-9'>
        <header className='flex justify-between'>
            <p className='text-gray-500 font-bold'>
            {dayjs(new Date(dayjs().year(), currentMonthidx)).format("MMM YYYY")}
            </p>
            <div className='flex space-x-8'>
                <LeftOutlined className='text-sm' onClick={handlePrevMonth}/>
                <RightOutlined className='text-sm' onClick={handleNextMonth} />
            </div>
        </header>
    </div>
  )
}
