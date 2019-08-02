import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Directory from './components/pages/directory'
import Edit from './components/pages/edit'

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: [],
      editData: {username: null,
                  email: null,
                  phone: null,
                  website: null}    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        let userArray = data.map((e, i) => e);
        console.log(userArray);

        this.setState({
          users: userArray
        });
      });
    }

    delete = index => {
      console.log(index);
      let dataCopy = JSON.parse(JSON.stringify(this.state.users));
      console.log(dataCopy[index], "datacopy index:::");
  
      if (dataCopy[index].id === this.state.data.id) {
        this.setState({
          data: []
        });
      }
      dataCopy.splice(index, 1);
      this.setState({
        users: dataCopy
      });
    };

    data = index => {
      console.log("index:::::::", index);
      let dataCopy = JSON.parse(JSON.stringify(this.state.users));
  
      console.log(dataCopy, "dataCopy!");
      this.setState({
        data: dataCopy[index]
      });
    };

submit = (id) => {
  console.log("submit!", id)
  let dataCopy = JSON.parse(JSON.stringify(this.state.editData));
  this.setState({users: dataCopy});
}

username = (e) => {
  let dataCopy = {...this.state.editData};
  dataCopy.username = e.target.value
  console.log(dataCopy)
  this.setState({editData: dataCopy});
  // console.log("edit data!",this.state.editData)
 

}

   render() {
  return (
    <Router>
           <Switch>

      <Route path = "/"
      exact render ={props => (
  <Directory

  {...props}
  // Names:
  data = {this.data}
  users ={this.state.users}
  // button:
  delete = {this.delete}
  // data:
  {...this.state.data}
  // edit button
  id = {this.state.data.id}
  
  
  />
  )}
/>

<Route
path = "/edit:id"
exact render = {props => (
  <Edit
  {...props}
  {...this.state.data}
  submit = {this.submit}
  usernameChange = {this.username}
  id = {this.state.data.id}
  />

)}
/>

</Switch>
    </Router>
  );
  }
}

export default App;
