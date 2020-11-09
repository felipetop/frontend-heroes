import React from 'react';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import Panel from '../components/panel/panel';
import Item from '../components/item/item';
import Search from '../components/search/search.js';

function Index() {
  return (
    <React.StrictMode>
      <Header title="Explore o universo">
        <p className="text-center">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - 
          e aqueles que você descobrirá em breve!
        </p>
        <Search/>
      </Header>
      <section className="container mt-50">
        <Panel grids={4} verticalMargin={5} horizontalMargin={25} bottomMargin={40}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </Panel>
      </section>
      <Footer/>
    </React.StrictMode>
  );
}

export default Index;
