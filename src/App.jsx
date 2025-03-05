import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // setInterval is Javascript function whcih will execute
    // the code block inside it repeatedly after a set time interval.
    // the set interval(e.g.1000)is milliseconds, 1 seconds below.
    const timerId = setInterval(() => {setTime(new Date())}, 1000);
    //cleanInterval after updated the current time.
    return ()=> clearInterval(timerId);
  
  }, [])

  //make another function which shows format of time
  const formattedTime = time.toLocaleTimeString('en-US',
    {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
  )
  

  return (
    <div className = 'clock-container'>
      {/* time is Date object that JSX can't directly render.
      So, it should be changed to strings type with the methods */}
      {/* {time.toLocaleTimeString()} or the best one is below */}
      <div className = 'clock'>
      {formattedTime}
      </div>
    </div>
  )
}

export default App
