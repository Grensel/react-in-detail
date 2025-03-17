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
export const SetIntervalExample = () => {
  const [counter, setCounter] = useState(1)


  console.log('SetIntervalExample');
  useEffect(() => {

    const intervalId = setInterval(() => {
      console.log('tick: ' + counter);
      setCounter((state) => state + 1)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return <>
    Hello, counter: {counter}
  </>
}


export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1)
  console.log('Component rendered with ' + counter);

  useEffect(() => {
    console.log('Effect occurred');
  }, [counter])
  const increase = () => { setCounter(counter + 1) }

  return (
    <>
      Hello, counter : {counter} <button onClick={increase}>+</button >
    </>
  )
}
export const KeysTrackerExample = () => {
  const [text, setText] = useState("")
  console.log('Component rendered with ' + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key)
    }
    window.document.addEventListener('keypress', handler)
    return () => {
      console.log('Effect end');
      window.document.removeEventListener('keypress', handler)
    }
  }, [text])
  return (
    <>
      Typed text : {text}
    </>
  )
}
export const SetTimeoutExample = () => {
  const [text, setText] = useState("")

  console.log('Component rendered with ' + text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED');

      setText('3 seconds passed')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <>
      Typed text : {text}
    </>
  )
}