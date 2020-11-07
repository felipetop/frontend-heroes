import React from 'react';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Panel from './components/panel/panel';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <section className="container mt-50">
        <Panel grids={3} verticalMargin={5} horizontalMargin={25}>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
          <div className="block-example"><div>Example</div></div>
        </Panel>
      </section>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
