import React , {useState} from 'react'


const Clickers = ({ initialvalue }) => {

    const [count , setCount] = useState(initialvalue);

    const increase =()=> {
         setCount((prev) => prev  + 1)
    }

    const decease =()=> {
        setCount((prev) => prev  - 1)
   }

   const restart =() => {
      setCount(0);
   }
   const switchsign =()=> {
       setCount((prev) => prev * -1)
   }
  

  return (
    <div>
        <button onClick={increase}>Up</button>
        <button onClick={decease}>Down</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchsign}>SwitchSign</button>

        <span data-testid="count">{count}</span>
    </div>
  )
}

export default Clickers;