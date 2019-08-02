import React from 'react'
import {Form, FormGroup, FormLabel, FormControl,Button} from 'react-bootstrap';

function Forms (props) {
  console.log(props)
    return (
        <React.Fragment>
<Form>
  <Form.Group >
    <Form.Label>Username</Form.Label>
    <Form.Control  placeholder={props.username}  onChange={e=>{props.usernameChange(e)}} />
  </Form.Group>

</Form>
<Button onClick={ e =>{props.submit(props.id)}}>
  Submit
</Button>
        </React.Fragment>
    )
}

export default Forms