import React from 'react'

const SearchButton = ({  onClick }) => {
  return (
    <div data-testid="search-button" onClick={onClick}>
        search
    </div>
  )
}

export default SearchButton