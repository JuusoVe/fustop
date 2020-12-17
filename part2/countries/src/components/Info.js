import ListItem from './ListItem'
import Country from './Country'

const Info = (props) => {

  if (props.countries.length > 10) {
    return (
      'Too many matches, specify another filter'
    )
  } else if (props.countries.length === 1) {
    return (
      <div>
        <Country country={props.countries[0]}/>
      </div>
    )
  } else {
    return (
      <div>      
        {props.countries.map(c => (
        <ListItem key={c.name} name={c.name} handler={props.handler}/>
        ))}  
      </div>  

    )
  } 
}

export default Info