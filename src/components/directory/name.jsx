import React from 'react'

function Name (props) {
    return (
        <React.Fragment>
        <h4 onClick={ e =>{props.data(props.index)}} >{props.name}</h4>
        

        </React.Fragment>
    )
}

export default Name