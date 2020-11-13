import React from "react";
import { debounce } from "throttle-debounce";
import icon from "./icon.png";

function Search(props) {
  const debounceFunc = debounce(400, (e) => {
    props.searchHero(e);
  });

  return (
    <div className={`Search ${props.className}`}>
      <div className="icon">
        <img src={icon} alt="Icon Search"  />
      </div>
      <input
        type="text"
        onChange={(e) => debounceFunc(e)}
        placeholder="Procure por heróis"
      />
    </div>
  );
}

export default Search;
