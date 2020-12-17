

const ShowButton = (props) => {

    const countryClick = () => {
        props.handler(props.name)
    }

    return (
        <div>
            <button onClick={countryClick}>
                show
            </button>
        </div>
    )    
}

export default ShowButton