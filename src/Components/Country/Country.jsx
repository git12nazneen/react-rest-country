import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  const {name, flags, population, area, cca3} = country;
  // console.log(country)

  const [visited, setVisited] = useState(false)

  const handleVisited = () =>{
    setVisited(!visited)
  }

  // const passWithparams = ()=>handleVisitedCountry(country);
  

    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h4>Name:{name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population {population}</p>
            <p>Area {area}</p>
            <p>Code {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.': 'I do not visited but wanted'}
        </div>
    );
};

export default Country;