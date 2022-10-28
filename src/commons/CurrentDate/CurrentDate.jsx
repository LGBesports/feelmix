import { useEffect, useState } from 'react'
import './CurrentDate.css'

const optionsDate = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}

const optionsTime = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

export const CurrentDate = () => {
  const date = new Date().toLocaleDateString('en-US', optionsDate)
  const time = new Date().toLocaleTimeString('en-US', optionsTime)

  const [curTime, setCurTime] = useState(time)
  const [curDate, setCureDate] = useState(date)

  useEffect(() => {
    const tick = setInterval(() => {
      const date = new Date().toLocaleDateString('en-US', optionsDate)
      const time = new Date().toLocaleTimeString('en-US', optionsTime)

      setCurTime(time)
      setCureDate(date)
    }, 1000)

    return () => clearInterval(tick)
  }, [])

  return (
    <div className='date'>
      <div className='date__date-value'>{curDate}</div>
      <div className='date__time-value'>{curTime}</div>
    </div>
  )
}