import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando PokemonDetails', () => {
  const string = 'More details';
  it('Testa se as informações detalhadas são mostradas na tela', () => {
    // acessar
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: string });
    userEvent.click(moreDetails);
    const title = screen.getByRole('heading', { name: 'Pikachu Details' });
    const summary = screen.getByRole('heading', { name: 'Summary' });
    const detailsP = screen.getByText(/This intelligent Pokémon/);

    // aferir
    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(detailsP).toBeInTheDocument();
  });

  it('Testa se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    // acessar
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: string });
    userEvent.click(moreDetails);
    const gameLocations = screen.getByRole('heading', {
      name: 'Game Locations of Pikachu',
    });
    const images = screen.getAllByRole('img', { name: 'Pikachu location' });
    // aferir
    expect(gameLocations).toBeInTheDocument();
    expect(images.length > 0).toBe(true);
    expect(images[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    // acessar
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: string });
    userEvent.click(moreDetails);
    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();

    // agir
    userEvent.click(checkbox);

    // aferir
    const favoriteImg = screen.getByRole('img', {
      name: 'Pikachu is marked as favorite',
    });
    expect(favoriteImg).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(favoriteImg).not.toBeInTheDocument();
  });
});
