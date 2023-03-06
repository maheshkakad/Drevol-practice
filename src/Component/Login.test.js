import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Login from "./Login";


it('should have a username and a password field, also a submit button', () => {
    render(<Login/>)

    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

it('should allow the user to submit their credentials', () => {
    
    const submit = jest.fn();
    render(<Login submit={submit}/>)

    const usernameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    userEvent.type(usernameField, "remy");
    userEvent.type(passwordField, "vsecure");
    userEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
        username: "remy",
        password: "vsecure"
    });


})

// test("user name should be rendered" , ()=> {
//      render(<Login />)
//      const userInputEl = screen.getAllByPlaceholderText(/username/i)

//      expect(userInputEl).toBeInTheDocument()

// })

// test("password input should be rendered" , ()=> {
//     render(<Login />)
//     const passwordInputEl = screen.getAllByPlaceholderText(/password/i);

//     expect(passwordInputEl).toBeInTheDocument();
    
// })
// test(" button should be rendered" , ()=> {
//     render(<Login />)
//     const buttonInputEl = screen.getByRole("button");

//     expect(buttonInputEl).toBeInTheDocument();
    
// })

// test('render react title' , ()=> {
//   // let renderResult:RenderResult;
 
//    const component  = renderer.create( <Login />);

//    let tree = component.toJSON()

//    expect(tree).toMatchSnapshot();

// })