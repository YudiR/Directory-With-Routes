import React from "react";
import { Link } from 'react-router-dom';
import {
  Form,
  Button
} from "react-bootstrap";

function Forms(props) {
  console.log("PROPS::", props);
  let username = '';
  let email = '';
  let phone = '';
  let website = '';



  return (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder={props.username}
            onChange={event => {
              username = event.target.value
              console.log(username)
            }}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder={props.email}
            onChange={event => {
              email = event.target.value
              console.log(email)
            }}
          />
           <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder={props.phone}
            onChange={event => {
              phone = event.target.value
              console.log(phone)
            }}
          />
           <Form.Label>Website</Form.Label>
          <Form.Control
            placeholder={props.website}
            onChange={event => {
              website = event.target.value
              console.log(website)
            }}
          />
        </Form.Group>
        
        
        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            console.log("DATA::",{ id: props.id, un: username });
            
            props.submit({ id: props.id, un: username,email: email, website: website, phone: phone });
          }}
        >
          Submit
        </Button>
      </Form>
      <ul>
            <Link to ="/">
            <li>
                Directory
            </li>
            </Link>
            </ul>
    </React.Fragment>
  );
}

export default Forms;
