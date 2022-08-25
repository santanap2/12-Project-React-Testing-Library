import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando About', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon:', () => {
    // acessar
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');
    const image = screen.getByAltText(/sprite/);
    const { src } = image;
    const URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    // aferir
    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(type).toHaveTextContent('Electric');
    expect(weight).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(src).toBe(URL);
  });

  it('Testa se o card do pokémon indicado na Pokédex contém um link de navegação', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'More details' });
    expect(link).toBeInTheDocument();

    // agir
    userEvent.click(link);

    // aferir
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    // acessar
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);
    const checkbox = screen.getByLabelText('Pokémon favoritado?');

    // agir
    userEvent.click(checkbox);

    // aferir
    const image = screen.getByRole('img', {
      name: 'Pikachu is marked as favorite',
    });
    const { src } = image;
    expect(image).toBeInTheDocument();
    console.log(src);
    expect(src).toBe('http://localhost/star-icon.svg');
  });
});
