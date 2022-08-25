import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testando FavoritePokemons', () => {
  it('Testa se a página contém um h2 com o texto `Page requested not found`', () => {
    // acessar
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', {
      name: 'Page requested not found Crying emoji',
    });

    // aferir
    expect(title).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem', () => {
    // acessar
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found',
    });
    const { src } = image;
    const URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    // aferir
    expect(image).toBeInTheDocument();
    expect(src).toBe(URL);
  });
});
