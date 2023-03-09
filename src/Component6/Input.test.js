import { fireEvent, getAllByTestId, getByTestId, render , screen} from "@testing-library/react"
import { act } from "react-test-renderer"
import Input from "./Input"


describe("testing input component" , () => {
     it("rendered input" , () => {
          render(<Input showDiv={false}  />)

          const inputele = screen.getByTestId("searchbar");
          expect(inputele).toBeInTheDocument();
     })

     it("render div" , () => {
          render(<Input showDiv={true}/>)

          const div = screen.getByTestId("divWeWantToShow");
          expect(div).toBeInTheDocument();
     })
     
     it("dont render div" , () => {
        render(<Input showDiv={false}/>)

        const div = screen.queryByTestId("divWeWantToShow");
        expect(div).toBeFalsy();
     })
    
     it("change on input causes change on header" , () => {
             const { getByTestId } = render(<Input showDiv={true} />)
             const input = getByTestId('searchbar')
             const header =  getByTestId("displaysearch");

             const inputWord = "Pedro";

             fireEvent.change(input, { target: { value: inputWord }})
             expect(header.innerHTML).toBe("Pedro");

             console.log(header.innerHTML)
         
     })
})