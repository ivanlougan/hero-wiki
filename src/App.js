import { useState } from 'react';
import { allHeroes } from './heroData';
import './App.css';

function App() {

  const [favHeroes, setFavHeroes] = useState([]);

  const handleAddToFav = (hero) => {
    let favCopy = [...favHeroes];
    favCopy.push(hero);
    setFavHeroes(favCopy);
  }

  const handleRemove = (index) => {
    let favCopy = [...favHeroes]
    favCopy.splice(index, 1);
    setFavHeroes(favCopy);
  }

  return (
    <div >
      <h1>hero information</h1>

      <h3>FAVOURITE HEROES</h3>
      {favHeroes.map( (favourite, index) => {
        return <Favourites key={index} favHero={favourite} removeFunc={() => handleRemove(index)}/>
      })}

      <h3>all heroes</h3>

      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo} favFunc={handleAddToFav}/>
      })}      
    </div>
  );
}

const Favourites = ( { favHero, removeFunc }) => {
  return (
    <>
      <p>{favHero}</p>
      <button onClick={removeFunc}>X</button>
    </>
  )
}

const HeroCard = (props) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>

      {show && (
      <div>
        <p>INFO: {props.heroObj.info}</p>
        <p>Villain: {props.heroObj.villain}</p>
      </div>
      )}

      <button onClick={ () => setShow( !show ) }> {show ? "HIDE INFO" : "SHOW INFO"}  </button>
      <button onClick={ () => {props.favFunc(props.heroObj.hero)}}>Add to favourites</button>
    </>
  )
}

export default App;
