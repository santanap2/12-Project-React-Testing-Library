import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando App', () => {
  it('Testa se a aplicação possui os links no topo', () => {
    // acessar
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });

    // aferir
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorites).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para Home', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });

    // agir
    expect(home).toBeInTheDocument();
    userEvent.click(home);

    // aferir
    expect(history.location.pathname).toBe('/');
  });

  it('Testa se a aplicação é redirecionada para About', () => {
    // acessar
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: 'About' });

    // agir
    expect(about).toBeInTheDocument();
    userEvent.click(about);

    // aferir
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se a aplicação é redirecionada para Favoritos', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });

    // agir
    expect(favorites).toBeInTheDocument();
    userEvent.click(favorites);

    // aferir
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa se a aplicação é redirecionada para Not Found', () => {
    // acessar
    const { history } = renderWithRouter(<App />);

    // agir
    history.push('/*');
    const notFound = screen.getByText('Page requested not found');

    // aferir
    expect(notFound).toBeInTheDocument();
  });
});
