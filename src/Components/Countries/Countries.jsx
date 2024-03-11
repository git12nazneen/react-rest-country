import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const[countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlalgs] = useState([])
    useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data=> setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited Country')
       const newVisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
        console.log('flags')
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlalgs(newVisitedFlag)
    }


    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>Visited countries : {visitedCountries.length}</h5>
                <ul>
                    {
                       visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display flags which are visited */}
            <div className="img-flag">
                {
                    visitedFlags.map((flag , idx) => <img key={idx}  src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country =>
                    <Country key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;