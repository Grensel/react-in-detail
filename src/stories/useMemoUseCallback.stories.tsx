import React, { useCallback } from "react"
import { useMemo, useState } from "react"

export default {
  title: 'useMemo',
}

export const DifficultCountingExample = () => {

  const [a, setA] = useState<number>(0)
  const [b, setB] = useState(3)

  let resultA = 1
  let resultB = 1
  resultA = useMemo(() => {
    let temrResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 1000000000) {
        fake++;
        const fakeValue = Math.random
      }
      temrResultA = resultA * i;
    }
    return temrResultA
  }, [a]);


  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={e => setA(+e.currentTarget.value)} />
      <input value={b} onChange={e => setB(+e.currentTarget.value)} />
      <hr />
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('users secret');

  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)



export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo!');

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

  const newArray = useMemo(() => {
    const newArray = users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
    return newArray
  }, [users])

  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newArray} />
    </>
  )
}

export const LikeUseCallack = () => {
  console.log('LikeUseCallack!');
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "CSS", 'HTML'])

  // const addBook = () => {
  //   const newBook = [...books, 'Andgular' + new Date().getTime()]
  //   setBooks(newBook)
  // }

  // const memoizedAddBook = useMemo(() => {
  //   const newBook = [...books, 'Andgular' + new Date().getTime()]
  //   setBooks(newBook)
  // }, [books])

  const memoizedAddBook2 = useCallback(() => {
    const newBook = [...books, 'Andgular' + new Date().getTime()]
    setBooks(newBook)
  }, [books])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Book addBook={memoizedAddBook2} />
      {books.map((b, i) => <div key={i}>{b}</div>)}
    </>
  )
}

const BooksSecret = (props: { addBook: () => void }) => {
  console.log('book');

  return (
    <div>
      <button onClick={props.addBook}>add book</button>
    </div>)
}

const Book = React.memo(BooksSecret)