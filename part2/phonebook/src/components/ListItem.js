const ListItem = (props) => {
    return (
      <p key={props.name}>
        {props.name} {props.number}
      </p>
    )
  }
export default ListItem