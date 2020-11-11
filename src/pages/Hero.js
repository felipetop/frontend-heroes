import React, { useState, useEffect } from 'react';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import GridContainer from '../components/gridContainer/GridContainer';
import Search from '../components/search/Search.js';
import axios from 'axios';
import Helmet from 'react-helmet';
import { Match } from 'react-router-dom';

function Index(props) {
  const [heroList, setHeroList] = useState([]);
  const [storiesList, setStoriesList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters/1017100?ts=1&limit=20&apikey=edc13921ce2d3563dcd2a150281f5c23&hash=1acefe488f2631cef41c7443649d0483`)
    .then(function (response) {
      // handle success
      console.log(response.data.data.results);
      setHeroList(response.data.data.results);
      setStoriesList(response.data.data.results[0].stories.items);
      setSeriesList(response.data.data.results[0].series.items);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, []);

  const renderHeroes = () => {
    return heroList.map((hero) => {
      return (
        <div>
          <div>
            <div>
              <h1>{ hero.name }</h1>
              <p>{ hero.description }</p>
              <div>
                <div>
                  Quadrinhos { storiesList.length}
                </div>
                <div>
                  Filmes { seriesList.length}
                </div>
              </div>
            </div>
            <div>
              <img src={hero.thumbnail.path+'.'+hero.thumbnail.extension}/>
            </div>
          </div>
          <GridContainer grids={6} mobileGrids={3} verticalMargin={5} horizontalMargin={30} bottomMargin={50}>
          {storiesList.map(function (storie) {
            return (
              <div>a{storie.name}</div>
            );
          })}
          </GridContainer>
        </div>
      )
    });
  }

  return (
    <React.StrictMode>
      <Helmet>
          <title>Frontend Heroes</title>
          <meta name="description" content="Mergulhe no domínio deslumbrante de todos os personagens clássicos da Marvel que você ama - e aqueles que você descobrirá em breve!" />
          <meta name="keywords" content="Marvel, Heróis, Personagens, Clássicos, Heróis da Marvel, Site Marvel" />
      </Helmet>
      <div className="FrontendHeroes background-grey">
        <Header className="container"/>
        <section className="container">
          {renderHeroes()}
        </section>
        <Footer/>
      </div>
    </React.StrictMode>
  );
}

export default Index;
