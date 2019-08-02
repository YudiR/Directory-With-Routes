import React from 'react'
import Button from 'react-bootstrap/Button';

function Buttons (props) {
    return (
        <React.Fragment>

<Button variant="info" onClick={e => props.delete(props.index)}>
        X
      </Button>
      </React.Fragment>
      
        
    )
}

export default Buttons