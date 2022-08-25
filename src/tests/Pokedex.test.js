import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando Pokedex', () => {
  it('Testa se a página contém um heading h2 com o texto `Encountered pokémons`', () => {
    // acessar
    renderWithRouter(<App />);
    const title = screen.getByText('Encountered pokémons');

    // aferir
    expect(title).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    // acessar
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(button).toBeInTheDocument();
    const pokemon1 = screen.getByText('Pikachu');

    // aferir
    expect(pokemon1).toBeInTheDocument();

    // pokemon2
    userEvent.click(button);
    const pokemon2 = screen.getByText('Charmander');
    expect(pokemon2).toBeInTheDocument();

    // pokemon3
    userEvent.click(button);
    const pokemon3 = screen.getByText('Caterpie');
    expect(pokemon3).toBeInTheDocument();

    // pokemon4
    userEvent.click(button);
    const pokemon4 = screen.getByText('Ekans');
    expect(pokemon4).toBeInTheDocument();

    // pokemon5
    userEvent.click(button);
    const pokemon5 = screen.getByText('Alakazam');
    expect(pokemon5).toBeInTheDocument();

    // pokemon6
    userEvent.click(button);
    const pokemon6 = screen.getByText('Mew');
    expect(pokemon6).toBeInTheDocument();

    // pokemon7
    userEvent.click(button);
    const pokemon7 = screen.getByText('Rapidash');
    expect(pokemon7).toBeInTheDocument();

    // pokemon8
    userEvent.click(button);
    const pokemon8 = screen.getByText('Snorlax');
    expect(pokemon8).toBeInTheDocument();

    // pokemon9
    userEvent.click(button);
    const pokemon9 = screen.getByText('Dragonair');
    expect(pokemon9).toBeInTheDocument();

    // pokemon1
    userEvent.click(button);
    expect(pokemon1).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um pokémon por vez;', () => {
    // acessar
    renderWithRouter(<App />);
    const names = screen.getAllByTestId('pokemon-name');

    // aferir
    expect(names.length).toBe(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    // acessar
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const electric = screen.getByRole('button', { name: 'Electric' });
    const fire = screen.getByRole('button', { name: 'Fire' });
    const bug = screen.getByRole('button', { name: 'Bug' });
    const poison = screen.getByRole('button', { name: 'Poison' });
    const psychic = screen.getByRole('button', { name: 'Psychic' });
    const normal = screen.getByRole('button', { name: 'Normal' });
    const dragon = screen.getByRole('button', { name: 'Dragon' });

    // aferir
    const buttonsLength = 7;
    expect(buttons.length).toBe(buttonsLength);
    expect(electric).toBeInTheDocument();
    expect(fire).toBeInTheDocument();
    expect(bug).toBeInTheDocument();
    expect(poison).toBeInTheDocument();
    expect(psychic).toBeInTheDocument();
    expect(normal).toBeInTheDocument();
    expect(dragon).toBeInTheDocument();
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro:', () => {
    // acessar
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();
    const pokemon1 = screen.getByText('Pikachu');

    // agir
    userEvent.click(allButton);

    // aferir
    expect(pokemon1).toBeInTheDocument();
  });
});
