import { fireEvent, getAllByTestId,queryAllByTestId, getByTestId, render , screen} from "@testing-library/react"
import { act } from "react-test-renderer"
import Button from "./Button"


describe("testing Button component" , () => {
     it("rendered input" , () => {
          render(<Button />)

          const button = screen.getByTestId("button");
          expect(button).toBeInTheDocument();
     })

     it("render 1 button before button click" ,  () => {
         const { getAllByTestId } = render(<Button />)

         const buttnList = getAllByTestId("button");
         expect(buttnList).toHaveLength(1);

     })

     it("render 2 button after 1 button click" ,  () => {
       
            const { queryAllByTestId } = render(<Button />)

            const buttnList = queryAllByTestId("button");
            fireEvent.click(buttnList[0])
             fireEvent.click(buttnList[0]);
            expect(queryAllByTestId("button")).toHaveLength(2);
    
        
    })
})