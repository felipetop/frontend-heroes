import React, { useState, useEffect } from "react";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/HeaderV1";
import GridContainer from "../components/gridContainer/GridContainer";
import Item from "../components/item/Item";
import Search from "../components/search/Search.js";
import Panel from "../components/panel/Panel.js";
import axios from "axios";
import Helmet from "react-helmet";

function Index() {
  const [heroList, setHeroList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOrder, setSearchOrder] = useState("name");
  const [favList, setFavList] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const searchHero = (event) => {
    setSearchTerm(event.target.value);
  };

  const changeOrder = () => {
    setSearchOrder(searchOrder === "name" ? "-name" : "name");
  };

  const addList = (heroToFav) => {
    let isFavorite = false;

    favList.forEach((hero) => {
      if (heroToFav.id === hero.id) {
        isFavorite = true;
      }
    });

    if (!isFavorite && favList.length < 5) {
      setFavList([...favList, heroToFav]);
    } else {
      setFavList(favList.filter((hero) => hero.id !== heroToFav.id));
    }
  };

  const isFavorite = (heroToCheck) => {
    let isFavorite = false;
    favList.forEach((hero) => {
      if (heroToCheck.id === hero.id) {
        isFavorite = true;
      }
    });
    return isFavorite;
  };

  const showFavOnly = () => {
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com/v1/public/characters?ts=1&limit=20${searchTerm ? "&nameStartsWith=" + searchTerm : ""}&orderBy=${searchOrder}&apikey=edc13921ce2d3563dcd2a150281f5c23&hash=1acefe488f2631cef41c7443649d0483`)
      .then(function (response) {
        // handle success
        setHeroList(response.data.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [searchTerm, searchOrder]);

  const renderHeroes = () => {
    return heroList.map((hero) => {
      return (
        <div>
          <Item key={hero.id} isChecked={isFavorite(hero)} favItem={addList} hero={hero} />
        </div>
      );
    });
  };

  const renderFavs = () => {
    return favList.map((hero) => {
      return (
        <div>
          <Item key={hero.id} isChecked={isFavorite(hero)} favList={favList} favItem={addList} hero={hero} />
        </div>
      );
    });
  };

  return (
    <React.StrictMode>
      <Helmet>
        <title>Frontend Heroes</title>
        <meta
          name="description"
          content="Mergulhe no domínio deslumbrante de todos os personagens clássicos da Marvel que você ama - e aqueles que você descobrirá em breve!"
        />
        <meta
          name="keywords"
          content="Marvel, Heróis, Personagens, Clássicos, Heróis da Marvel, Site Marvel"
        />
      </Helmet>
      <div className="FrontendHeroes">
        <Header className="container" title="Explore o universo">
          <p className="text-center">
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </p>
          <Search searchHero={searchHero} />
        </Header>
        <Panel
          changeOrder={changeOrder}
          showFavOnly={showFavOnly}
          className="container mt-50"
        />
        <section className="container">
          <GridContainer
            grids={4}
            mobileGrids={2}
            horizontalMarginItemMobile={5}
            horizontalMarginItem={25}
            bottomMarginItem={40}
          >
            {showFavorites ? renderFavs() : renderHeroes()}
          </GridContainer>
        </section>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default Index;
