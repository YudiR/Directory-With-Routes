import React from "react";
import Name from "../directory/name";
import Data from "../directory/data";
import Title from '../directory/title';
import { Container, Row, Col } from "react-bootstrap";
import Button from "../directory/button";
import EditButton from "../form/button";


function Directory (props)  {
    let users = props.users
     return(
        <React.Fragment>
<Container>

<Row>
     <Col align="center">{!props.username && <Title/>}</Col>
            
          </Row>


<Row>
    <Col md={"auto"}>
    {  users.map((user, userIndex) => (
        <React.Fragment>
                  <Name
                    key={userIndex}
                    index={userIndex}
                    name={user.name}
                    data={props.data}
                  />
                   <Button key={userIndex +1 } index={userIndex} delete={props.delete} /> 
        </React.Fragment>        
))}


    </Col>
    
    

    <Col md={{ span: 4 , offset: 2 }}>
        {props.username  &&
        
        <React.Fragment>        

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> 
              <Data username = {props.username} email= {props.email}
        phone = {props.phone} website = {props.website} />
        <EditButton id = {props.id} {...props}/>
                           </React.Fragment>        
 }
            </Col>
</Row>


</Container>

</React.Fragment>
)
}

export default Directory