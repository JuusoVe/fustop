const UserMsg = ( {message, type} ) => {

    const sucStyle = {
        color: 'green'
    }

    const erStyle = {
        color: 'red'
    }

    if (message === null) {
        return null
    } else if (type === 'err') {
        return (
            <div className="userMsg" style={erStyle}>
            {message}
        </div>
        )
    } else {
        return (
            <div className="userMsg" style={sucStyle}>
                {message}
            </div>
        )
    }
}


export default UserMsg