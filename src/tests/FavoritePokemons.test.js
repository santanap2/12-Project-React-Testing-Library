import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testando FavoritePokemons', () => {
  it('Testa se é exibida na tela a mensagem caso a pessoa não tenha favoritos', () => {
    // acessar
    renderWithRouter(<FavoritePokemons />);
    const notFoundMessage = screen.getByText('No favorite pokemon found');
    const title = screen.getByRole('heading', { name: 'Favorite pokémons' });

    // aferir
    expect(notFoundMessage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
