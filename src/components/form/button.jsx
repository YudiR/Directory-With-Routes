import React from 'react'
import Button from 'react-bootstrap/Button';

function EditButton (props) {
    let id = props.id 
    return (
        <React.Fragment>

<Button  onClick={event => {
 
            console.log(props);
            
            props.history.push(`/edit id}`);
        }} 
            >
        Edit!
      </Button>
      </React.Fragment>
      
        
    )
}

export default EditButton