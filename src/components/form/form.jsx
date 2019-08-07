import React from "react";
import { Link } from 'react-router-dom';
import {
  Form,
  Button
} from "react-bootstrap";

function Forms(props) {
  console.log("PROPS::", props);
  let username = '';
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
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            console.log("DATA::",{ id: props.id, un: username });
            
            props.submit({ id: props.id, un: username });
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
