  import React, { useState, useEffect } from 'react';
  import Footer from '../layout/footer/Footer';
  import Header from '../layout/header/HeaderV2';
  import SingleItem from '../components/singleItem/SingleItem';
  import axios from 'axios';
  import Helmet from 'react-helmet';
  import { useParams } from "react-router-dom";
import Search from '../components/search/Search';

  function Index(props) {
    const [heroList, setHeroList] = useState([]);
    const [storiesList, setStoriesList] = useState([]);
    const [seriesList, setSeriesList] = useState([]);
    let { heroId } = useParams();

    useEffect(() => {
      axios.get(`https://gateway.marvel.com/v1/public/characters/${heroId}?ts=1&limit=20&apikey=edc13921ce2d3563dcd2a150281f5c23&hash=1acefe488f2631cef41c7443649d0483`)
      .then(function (response) {
        // handle success
        console.log(response.data.data.results);
        setHeroList(response.data.data.results);
        setStoriesList(response.data.data.results[0].stories.items);
        setSeriesList(response.data.data.results[0].series.items);
        console.log("stories",response.data.data.results[0].stories.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, []);

    const renderHeroes = () => {
      return heroList.map((hero) => {
        return (
          <React.StrictMode>
            <Helmet>
              <title>{ hero.name }</title>
              <meta name="description" content={ `Marvel - ${ hero.description }` } />
              <meta name="keywords" content={`${ hero.name }, Marvel, Heróis, Personagens, Clássicos, Heróis da Marvel, Site Marvel`} />
            </Helmet>
            <SingleItem
              className="container"
              name={ hero.name }
              description={ hero.description }
              id={ hero.id }
              storiesListLength={ storiesList.length }
              seriesListLength={ seriesList.length }
              image={hero.thumbnail.path+'.'+hero.thumbnail.extension}
              storiesList={storiesList.slice(0, 10)}
            />
          </React.StrictMode>
        )
      });
    }

    return (
      <React.StrictMode>
        <div className="FrontendHeroes background-grey">
          <Header className="container">
            <Search className="white" />
          </Header>
          {renderHeroes()}
          <Footer/>
        </div>
      </React.StrictMode>
    );
  }

  export default Index;
