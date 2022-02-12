import React,{ useContext, useEffect, useState} from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import { getMonth } from './util.js';
function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth())
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setcurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className = "flex flex-1">
        <Sidebar/>
        <Month month = {currentMonth}/>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
