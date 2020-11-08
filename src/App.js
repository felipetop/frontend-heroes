import React from 'react';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Panel from './components/panel/panel';
import Item from './components/item/item';

function App() {
  return (
    <React.StrictMode>
      <Header/>
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

export default App;
