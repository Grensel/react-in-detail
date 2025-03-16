import { ClockViewPropsType } from "./Clock"

const get2digitsStrings = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  return (
    <>
      <span>{get2digitsStrings(date.getHours())}</span>
      :
      <span>{get2digitsStrings(date.getMinutes())}</span>
      :
      <span>{get2digitsStrings(date.getSeconds())}</span>
    </>
  )
}