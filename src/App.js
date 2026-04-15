import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };
    this.mudaEmail = this.mudaEmail.bind(this);
    this.mudaSenha = this.mudaSenha.bind(this);
    this.acessar = this.acessar.bind(this);
  }

  mudaEmail(e) {
    let state = this.state;
    state.email = e.target.value;
    this.setState(state);
  }

  mudaSenha(e) {
    let state = this.state;
    state.senha = e.target.value;
    this.setState(state);
  }

  acessar() {
    const usuarios = [
      { email: 'eduardo.lino@pucpr.br', senha: '123456' },
      { email: 'gabriela.ocanha@pucpr.edu.br',    senha: '123456' }
    ];

    let state = this.state;
    const encontrado = usuarios.find(
      u => u.email === state.email && u.senha === state.senha
    );

    if (encontrado) {
      state.mensagem = 'Acessado com sucesso!';
    } else {
      state.mensagem = 'Usuário ou senha incorretos!';
    }
    this.setState(state);
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-card">
          <h2>Login</h2>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            onChange={this.mudaEmail}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="••••••"
            onChange={this.mudaSenha}
          />
          <button onClick={this.acessar}>Acessar</button>
          <label className={
            this.state.mensagem === 'Acessado com sucesso!'
              ? 'msg-sucesso'
              : 'msg-erro'
          }>
            {this.state.mensagem}
          </label>
        </div>
      </div>
    );
  }
}

export default App;