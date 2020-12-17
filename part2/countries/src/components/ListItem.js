import ShowButton from './ShowButton'

const ListItem = (props) => {


  


    return (
      <div>
          {props.name}
          <ShowButton name ={props.name} handler={props.handler}/>
      </div>
    )
  }
export default ListItem