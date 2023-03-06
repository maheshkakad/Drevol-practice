import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './Component/Navbar';
import { RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer'

test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/mahesh/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getAllByRole("listitem");
  expect(linkElement.length).toBe(5)
});

// test('render react component' , ()=> {
//    render(<App />)
//    const  elementapp = screen.getByText(/parent/i)
//    expect(elementapp).toBeInTheDocument()
// })

// test('render react component' , ()=> {
//   render(<App />)
//  const  elementapp = screen.getByTestId("mytestid")
//   expect(elementapp).toBeInTheDocument()
// })


// test('render react title' , ()=> {
//   // let renderResult:RenderResult;
 
//    const component  = renderer.create( <App />);

//    let tree = component.toJSON()

//    expect(tree).toMatchSnapshot();

// })
