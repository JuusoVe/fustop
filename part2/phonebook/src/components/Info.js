import ListItem from './ListItem'

const Info = ( {persons} ) => {
    return (
      <div>
        {persons.map(p => <ListItem key={p.name} name={p.name} number={p.number}/>)}
      </div>
    )
  }
export default Info