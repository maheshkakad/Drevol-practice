import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Searchapp from './Searchapp';
import Search from "./Search";


describe("render component" ,()=> {
     
    it("render searchapp coomponent" , async ()=> {
          
        render(<Searchapp />)
 
        // screen.debug();

        // screen.getByText('Search:');
        // // explicit assertion
        // // recommended
        // expect(screen.getByText('Search:')).toBeInTheDocument()

        //pass
        // expect(screen.getByRole('textbox')).toBeInTheDocument();

        // screen.debug();

        // // fails
        // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
       
        // expect(screen.queryByText('Sign in as')).toBeNull();
        // screen.debug();
        // expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
        // screen.debug();


        // await screen.findByText(/Signed in as/);
        // screen.debug();

        // fireEvent.change(screen.getByRole('textbox') , {
        //      target: { value: 'javascript' },
        // })

        // screen.debug();


        //REACT TESTING LIBRARY: FIRE EVENT ===>>>>>
        //    await screen.findByText(/Signed in as/);
        // screen.debug();
        // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
        // fireEvent.change(screen.getByRole('textbox') , {
        //      target: { value: 'javascript' },
        // })
       
        // waitFor(()=>
        //   expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
        // )
        // screen.debug();

   //React Testing Library: User Event ==== >>>>>>

   //fireEvent.change() triggers only a change event whereas userEvent.type triggers a
   // change event, but also keyDown, keyPress, and keyUp events.

          // wait for the user to resolve
        // await screen.findByText(/Signed in as/);

        // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

        // await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

        // expect(
        //     screen.getByText(/Searches for JavaScript/)
        // ).toBeInTheDocument();

        //Whenever possible, use userEvent over fireEvent when using React Testing Library. At the time of writing this, userEvent doesn't 
        //include all the features of fireEvent, however, this may change in the future.


        
         
    })

    //REACT TESTING LIBRARY: CALLBACK HANDLERS ====>>>>>

    // describe('Search', () => {
    //     it('calls the onChange callback handler', () => {
    //       // Jest
    //       // const onChange = jest.fn();
    //       // Vitest
    //       const onChange = jest.fn();
      
    //       render(
    //         <Search value="" onChange={onChange}>
    //           Search:
    //         </Search>
    //       );
      
    //       fireEvent.change(screen.getByRole('textbox'), {
    //         target: { value: 'JavaScript' },
    //       });
      
    //       expect(onChange).toHaveBeenCalledTimes(1);
    //     });

    //     it('calls the onChange callback handler with userEvent', async () => {
    //         // Jest
    //         // const onChange = jest.fn();
    //         // Vitest
    //         const onChange = jest.fn();
        
    //         render(
    //           <Search value="" onChange={onChange}>
    //             Search:
    //           </Search>
    //         );
        
    //         await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
        
    //         expect(onChange).toHaveBeenCalledTimes(10);
    //       });
    //   });

  
})

