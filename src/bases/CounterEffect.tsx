import { useEffect, useState } from "react"


export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        setCounter(prev => prev +1)
    }

    useEffect(() => {
    
    }, [])
    

  return (
    <>
    <h1>CounterEffect: {counter}</h1>
    <button onClick={handleClick}>+1</button>
    </>
  )
}
