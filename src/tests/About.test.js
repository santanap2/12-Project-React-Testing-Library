import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('Testando About', () => {
  it('Testa se a página contém um heading h2 com o texto `About Pokédex`', () => {
    // acessar
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { name: 'About Pokédex' });

    // aferir
    expect(title).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // acessar
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/This application simulates/);
    const paragraph2 = screen.getByText(/One can filter Pokémons/);

    // aferir
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('Testa se a página contém a imagem específica de uma Pokédex', () => {
    // acessar
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: 'Pokédex' });
    const { src } = image;
    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    // aferir
    expect(image).toBeInTheDocument();
    expect(src).toBe(URL);
  });
});
