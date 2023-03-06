import React from "react";
import { render , cleanup, getByTestId , fireEvent } from "@testing-library/react";
import Clickers from "./Clickers";

afterEach(cleanup)

describe(Clickers , () => {
    
    it('counter display correct initil display' , ()=> {

        const { getByTestId } = render(<Clickers initialvalue={0} />)
        const countvalue = Number(getByTestId('count').textContent)

        expect(countvalue).toBe(0)
    })

    it('counter shoulld increment by one display correct initil display' , ()=> {

        const { getByTestId ,getByRole } = render(<Clickers initialvalue={0} />)
       
         const incrementbtn = getByRole("button" ,{ name: "Up"})
         const countvalue1 = Number(getByTestId('count').textContent);
         expect(countvalue1).toBe(0);
         fireEvent.click(incrementbtn);

         const countvalue2 = Number(getByTestId('count').textContent);
         expect(countvalue2).toBe(1);
    })

    
    it('counter shoulld increment by one display correct initil display' , ()=> {

        const { getByTestId ,getByRole } = render(<Clickers initialvalue={0} />)
       
         const decrementdtn = getByRole("button" ,{ name: "Down"})

         expect(Number(getByTestId("count").textContent)).toEqual(0);
         fireEvent.click(decrementdtn)

         expect(Number(getByTestId("count").textContent)).toEqual(-1)
    })

    it('counter shoulld 0  when click on restart button' , ()=> {

        const { getByTestId ,getByRole } = render(<Clickers initialvalue={50} />)
       
         const restartbtn = getByRole("button" ,{ name: "Restart"})

         expect(Number(getByTestId("count").textContent)).toEqual(50);
         fireEvent.click(restartbtn)

         expect(Number(getByTestId("count").textContent)).toEqual(0)
    })


    it(' count should invert sign if the switch sign button is clicked' , ()=> {

        const { getByTestId ,getByRole } = render(<Clickers initialvalue={50} />)
       
         const switchbutton = getByRole("button" ,{ name: "SwitchSign"})

         expect(Number(getByTestId("count").textContent)).toEqual(50);
         fireEvent.click(switchbutton)

         expect(Number(getByTestId("count").textContent)).toEqual(-50)
    })



})
