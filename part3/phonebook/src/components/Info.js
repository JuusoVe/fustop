import ListItem from './ListItem'

const Info = ( {persons, del, un} ) => {
    return (
      <div>
        {persons.map(p => <ListItem key={p.name} name={p.name} number={p.number} id={p.id} del={del} un={un}/>)}
      </div>
    )
  }
export default Info