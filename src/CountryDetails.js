import React from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    
    const countriesList = countries;
    
    const getCountry = (id) => {
        let countryMatch = countriesList.find(country => country.cca3 === props.match.params.id);
        return countryMatch
    }

    const getCountryBordersName = (border) => {
        let countryMatch = countriesList.find(country => country.cca3 === border);
        return countryMatch
    }
    
    const countryFound = getCountry(props.match.params.id);

    return (
        <div className="col-7">
          <h1>{countryFound.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{countryFound.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryFound.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {
                    countryFound.borders.map(border => 
                    <li><Link to={`/${border}`}>{getCountryBordersName(border).name.common}</Link></li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}
