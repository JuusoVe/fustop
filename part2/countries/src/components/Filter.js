const Filter = (props) => {
    return (
      <div>
        filter countries <input onChange={props.handleChange}/>
      </div>
    )
  }

export default Filter