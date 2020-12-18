const ListItem = (props) => {

  const Del = () => {
    if (window.confirm(`are you sure you wish to delete ${props.name}`)) {
      props.del(props.id, props.un)
    }

  }

    return (
      <p key={props.name}>
        {props.name} {props.number} <button onClick={Del}>delete</button>
      </p>
    )
  }
export default ListItem