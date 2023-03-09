import React from "react";
import { fireEvent, render  , screen } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

it("renders correctly" , () => {
     
    const { queryByTestId , queryByPlaceholderText } = render( <SearchBox />);

    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText("Search")).toBeTruthy()

    
 

}) 

describe("input value" , () => {
      
    it("update on change" , () => {
         const { queryByPlaceholderText } = render( <SearchBox />)

         const searchInput = queryByPlaceholderText('Search')

         fireEvent.change(searchInput , { target: { value: "test" }})

         expect(searchInput.value).toBe("test");
    })
})
// need to understand and need to ask this test===>>
describe("Search Button" , () => {
     describe("with empty query" , () => {
         it("Dose not trigger requestSearch function" , () => {
            const requestSearch = jest.fn();

            const { queryByTestId  } = render( <SearchBox requestSearch={requestSearch} />);
             fireEvent.click(queryByTestId('search-button'))
             expect(requestSearch).not.toHaveBeenCalled()    
         })
     })

     describe("with data inside query", () => {
         it("triggers requestSearch function", () => {
            const requestSearch = jest.fn();

            const { queryByTestId ,queryByPlaceholderText } = render( <SearchBox requestSearch={requestSearch} />);
            const searchInput = queryByPlaceholderText('Search');

            fireEvent.change(searchInput , { target: { value: "test" }});

            fireEvent.click(queryByTestId('search-button'))
             expect(requestSearch).toHaveBeenCalled();    
         })
     })
})