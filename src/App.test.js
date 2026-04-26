import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('1 - renderiza o título Login', () => {
  render(<App />);
  const titulo = screen.getByText(/login/i);
  expect(titulo).toBeInTheDocument();
});

test('2 - renderiza o campo de e-mail', () => {
  render(<App />);
  const inputEmail = screen.getByPlaceholderText(/seu@email.com/i);
  expect(inputEmail).toBeInTheDocument();
});

test('3 - renderiza o campo de senha', () => {
  render(<App />);
  const inputSenha = screen.getByPlaceholderText(/••••••/i);
  expect(inputSenha).toBeInTheDocument();
});

test('4 - renderiza o botão Acessar', () => {
  render(<App />);
  const botao = screen.getByText(/acessar/i);
  expect(botao).toBeInTheDocument();
});

test('5 - login com credenciais corretas mostra sucesso', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/seu@email.com/i), {
    target: { value: 'eduardo.lino@pucpr.br' }
  });
  fireEvent.change(screen.getByPlaceholderText(/••••••/i), {
    target: { value: '123456' }
  });
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/acessado com sucesso/i)).toBeInTheDocument();
});

test('6 - login com credenciais erradas mostra erro', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/seu@email.com/i), {
    target: { value: 'errado@email.com' }
  });
  fireEvent.change(screen.getByPlaceholderText(/••••••/i), {
    target: { value: 'senhaerrada' }
  });
  fireEvent.click(screen.getByText(/acessar/i));
  expect(screen.getByText(/usuário ou senha incorretos/i)).toBeInTheDocument();
});