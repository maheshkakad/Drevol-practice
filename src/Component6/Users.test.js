import React from 'react';
import { render , screen } from '@testing-library/react';
import fetchMock from "fetch-mock";
import Users from './Users';

describe("Users Component" , ()=> {
     beforeEach(() => {
         fetchMock.resetMocks();

     })

     test("renders users when API call succeds" , async ()=> {
        const fakeUsers = [
            { id: 1, name: 'Joe' },
            { id: 2, name: 'Tony' },
          ]
          fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeUsers) })
         render(<Users />)
         expect(screen.getByRole('heading')).toHaveTextContent("List of Users");

         expect(await screen.findByText('Joe')).toBeInTheDocument();
         expect(await screen.findByText("Tony")).toBeInThheDocument();

         expect(screen.queryByText('No users found')).not.toBeInTheDocument();

     });

     test("renders users when API call succeds" , async ()=> {
        fetchMock.mockReject(() => Promise.reject("API error"))
         render(<Users />)

         expect(await screen.findByText('Something went wrong!')).toBeInTheDocument();
         expect(await screen.findByText('No users found')).toBeInTheDocument()
    })
})