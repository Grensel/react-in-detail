import { useEffect, useState } from "react"

export default {
  title: 'useEffect',
}

// export const SimpleExample = () => {
//   const [counter, setCounter] = useState(1)
//   const [fake, setFake] = useState(1)

//   console.log('SimpleExample');


//   useEffect(() => {
//     console.log('useEffect every render');
//     document.title = counter.toString()
//   })
//   useEffect(() => {
//     console.log('useEffect only firs render (componentDidMount)');
//     document.title = counter.toString()
//   }, [])
//   useEffect(() => {
//     console.log('useEffect first render and every counter change');
//     document.title = counter.toString()
//   }, [counter])
//   return (
//     <>
//       Hello, {counter} {fake}
//       <button onClick={() => setCounter(counter + 1)}>counter +</button>
//       <button onClick={() => setFake(fake + 1)}>fake +</button>
//     </>
//   )
// }
export const SetTimeoutExample = () => {
  // const [counter, setCounter] = useState(1)
  const [date, setDate] = useState("2024-07-22")
  const [time, setTime] = useState(``)


  const day = new Date()

  // console.log(time);
  useEffect(() => {
    setTimeout(() => {
      // setTime(`Hour: ${day.getHours().toString()} Minets: ${day.getMinutes()} Seconds: ${day.getSeconds()}`)
      setTime(`${day.getHours().toString()} : ${day.getMinutes()} : ${day.getSeconds()} : ${day.getMilliseconds()}`)
    }, 10)
  }, [time])
  useEffect(() => {
    setTimeout(() => {
      // setTime(`Hour: ${day.getHours().toString()} Minets: ${day.getMinutes()} Seconds: ${day.getSeconds()}`)
      setDate(`${day.getFullYear().toString()}-0${day.getMonth()}-0${day.getDay()}`)
    }, 10)
  }, [date])



  // useEffect(() => {

  //   setTimeout(() => {
  //     console.log('setTimeout');
  //     document.title = counter.toString()
  //   }, 1000)

  // }, [counter])

  // useEffect(() => {

  //   setInterval(() => {
  //     console.log('tick: ' + counter);
  //     setFake((state) => state + 1)
  //   }, 1000)

  // }, [])



  return (
    <>
      <span>{time}</span>
      <div>
        <input disabled value={date} type="date" style={{ background: 'none', border: 'none' }} />
      </div>
      {/* Hello, counter: {counter} fake: {fake}
      <button onClick={() => setCounter(counter + 1)}>counter +</button> */}
      {/* <button onClick={() => setFake(fake + 1)}>fake +</button> */}
    </>
  )
}

