

const Country = ( {country} ) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(l => <Language key={l.name} language={l.name}/>)}
            </ul>
            <img src={country.flag} height="150" alt="flag not found"/>
            <h3></h3>
        </div>
    )
  }

const Language = (props) => {
    return (
      <li>{props.language}</li>
    )  
}

export default Country