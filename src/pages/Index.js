import React from 'react';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import GridContainer from '../components/gridContainer/gridContainer';
import Item from '../components/item/item';
import Search from '../components/search/search.js';
import Panel from '../components/panel/panel.js';

function Index() {
  return (
    <React.StrictMode>
      <Header className="container" title="Explore o universo">
        <p className="text-center">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - 
          e aqueles que você descobrirá em breve!
        </p>
        <Search/>
      </Header>
      <Panel className="container mt-50" />
      <section className="container">
        <GridContainer grids={4} mobileGrids={2} verticalMargin={5} horizontalMargin={25} bottomMargin={40}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </GridContainer>
      </section>
      <Footer/>
    </React.StrictMode>
  );
}

export default Index;
