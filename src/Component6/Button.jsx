import React, { useState } from 'react'

const Button = () => {
    const [showantherButton , setShowantherButton] = useState(false)

  return (
    <div>
        <button
         data-testid='button'
         onClick={() => {
            setShowantherButton(true)

         }}
        >CLICK HEREEEEE</button>

        {showantherButton && (
             <button data-testid='button'>CLICK hereeee</button>
        )}
    </div>
  )
}

export default Button;