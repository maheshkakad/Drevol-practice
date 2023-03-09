import { render, screen, waitFor } from "@testing-library/react";
import * as api from "./api";
import PokemonList from "./PokemonList";

jest.mock("./api");

describe("PokemonList Component", () => {

    // After each test clear the mock


    beforeEach(() => jest.clearAllMocks());
  
    it("should render pokemon names when api responds",  async () => {
        
      // For this test, when getPokemonsFromApi is called
      // return the given value wrapped in a Promise

      api.getPokemonsFromApi.mockResolvedValue({
        results: [{ name: "mahsh" }],
      });
      // Render the component
      render(<PokemonList />);
      
      // See if the pokemon name we returned in the mock is visible
      await waitFor(() => {
        screen.getByText("mahesh");
      });

    });

    it("should render error message when api fails",  () => {
        api.getPokemonsFromApi.mockRejectedValue({});
        render(<PokemonList />);
         waitFor(() => {
          screen.findByText("Unable to fetch data");
        });
      })
  });