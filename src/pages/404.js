import React, { Component } from 'react';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import { NavLink } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <React.StrictMode>
        <Header title="404 - Pagina nao encontrada"/>
        <section className="container mt-50">
          <p className="text-center">
            Página não encontrada, para voltar clique <NavLink exatc to="./">aqui.</NavLink>
          </p>
        </section>
        <Footer/>
      </React.StrictMode>
    );
  }
}
  
export default NoMatch;
  