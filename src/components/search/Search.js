import icon from './icon.png';

function Search(props) {
    return (
      <div className={`Search ${props.className}`}>
          <div className="icon"><img src={icon}/></div>
          <input type="text" placeholder="Procure por heróis"/>
      </div>
    );
}
  
export default Search;
  