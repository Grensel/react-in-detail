import { useEffect, useState } from "react"
import { DigitalClockView } from "./DigitalClockView"
import { AnalogClockView } from "./AnalogClockView"

export type PropsType = {
  mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
  date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick');
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])



  let view = <></>

  switch (props.mode) {
    case 'analog':
      view = <AnalogClockView date={date} />
      break;
    default:
      view = <DigitalClockView date={date} />
  }

  return (
    <div>
      {view}
    </div>
  )
}
