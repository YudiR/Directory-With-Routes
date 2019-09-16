import React from 'react'
import Forms from '../form/form'
function Edit (props) {
    console.log(props.username,"username")
    return (
        <React.Fragment>
        <Forms
        submit = {props.submit}
        username = {props.username}
        email = {props.email}
        id= {props.id}
        phone = {props.phone}
        website = {props.website}
        />

        </React.Fragment>
    )
}

export default Edit