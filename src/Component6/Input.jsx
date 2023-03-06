import React, { useState } from 'react'

const Input = ({ showDiv }) => {
     const [searchWord , setSearchWord] = useState("")

  return (
    <div>
        <input type="text"
           data-testid="searchbar"
           placeholder='search...'
           onChange={(e) => { 
             setSearchWord(e.target.value)
           }}
         />
         <h1 data-testid='displaysearch'>{searchWord}</h1>

         {showDiv && ( 
             <div data-testid='divWeWantToShow'>Hey my name is mahesh please let me know</div>
         )}
    </div>
  )
}

export default Input