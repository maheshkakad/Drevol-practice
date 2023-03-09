import { useState } from "react"
import SearchButton from "./SearchButton";
import styled from "styled-components";

const Container = styled.div`
 display:"flex";
 flex-direction: row;
`;

export const SearchBox = ({ requestSearch }) => {
     const [query , setQuery] = useState("");

     const searchClick =() => {
        if(query) {
             requestSearch(query)
        }
     }

     const updateQuery =e => {
         setQuery(e.target.value);
     }

     return (
         <Container>
              <input
               type="text"
               name="search"
               placeholder="Search"
               value={query}
               onChange={updateQuery}  
              />
              <SearchButton  onClick={searchClick} />
         </Container>
     )
}

//https://www.youtube.com/watch?v=NE_aorvSeSQ&t=81s
