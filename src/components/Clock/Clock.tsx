import { useEffect, useState } from "react"

// export type PropsType = () => void

export const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick');
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const get2digitsStrings = (num: number) => num < 10 ? '0' + num : num

  return (
    <div>
      <span>{get2digitsStrings(date.getHours())}</span>
      :
      <span>{get2digitsStrings(date.getMinutes())}</span>
      :
      <span>{get2digitsStrings(date.getSeconds())}</span>
    </div>
  )
}