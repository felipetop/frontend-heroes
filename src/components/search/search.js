import icon from './icon.png';

function Search() {
    return (
      <div className="Search">
          <div className="icon"><img src={icon}/></div>
          <input type="text" placeholder="Procure por heróis"/>
      </div>
    );
}
  
export default Search;
  