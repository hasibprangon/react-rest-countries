import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/Countries/Countries';
import Person from './component/Countries/person/Person';

function App() {
  return (
    <div className="App">
      {/* <Loadcountries></Loadcountries> */}
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

// function Loadcountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return(
//     <div>
//       <h1>Visiting every countries in the world</h1>
//       <h3>Availavle countries : {countries.length}</h3>

//       {
//         countries.map(country => <Country name={country.name.official} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(

//     <div>
//       <h2> <span style={{fontWeight: 'bold'}}>Official Name:</span> {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>

//   )
// }

export default App;
