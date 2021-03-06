import { Link } from 'react-router-dom';
import React from 'react'

export default function CountriesList(props) {

    return (
        <div className="col-5 countriesList">
            <div className="list-group">
                   { 
                    props.countries.map((country, index) => 
                    <a className={`list-group-item list-group-item-action`} key={country.cca3}><Link to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link></a>
                   )
                   }
            </div>
        </div>
    );

}


// import React from "react";
// import { Link } from "react-router-dom";
// const CountriesList = props => {
//   return (
//     <React.Fragment>
//       { props.countries.map(el => {
//         return (
//           <Link
//             key={el.cca3}
//             className="list-group-item list-group-item-action"
//             to={"/" + el.cca3}
//           >
//             <span role="img">{el.flag}</span> {el.name.common}
//           </Link>
//         );
//       })}
//     </React.Fragment>
//   );
// };
// export default CountriesList;