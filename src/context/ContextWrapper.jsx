import dayjs from 'dayjs';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex,setMonthIndex] = useState(dayjs().month());
  return (
    <div>
        <GlobalContext.Provider 
        value = {{
            monthIndex,setMonthIndex
        }}>
            {props.children}
        </GlobalContext.Provider>
    </div>
  )
}
