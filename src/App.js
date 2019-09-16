import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Directory from './components/pages/directory'
import Edit from './components/pages/edit'
import {data} from './modules'
// just need to repeat for inputs. make input if empty not be empty for setstate

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: {}};
  }

  componentDidMount() {
       data()
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
          data: {}
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

submit = (data) => {
  console.log("submit!heeeeeeeeyyyyyaksfajslkfjlsk",data.id, data.un)
  console.log("submit!!!!!!!!!!!!!!!!!")
  let objectCopy = JSON.parse(JSON.stringify(this.state.data));
  objectCopy.username = data.un
  objectCopy.email = data.email
  objectCopy.phone = data.phone
  objectCopy.website= data.website

  let dataCopy = JSON.parse(JSON.stringify(this.state.users));
  dataCopy[data.id -1].username = data.un

  this.setState({users: dataCopy, data: objectCopy });

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
