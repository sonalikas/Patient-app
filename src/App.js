import React from 'react'
import './App.css';
import Edit from './Edit';
import Home from './Home';
import View from './View';
import Add from './Add';
import { Navbar, Nav} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home" class="brand" >Patient App</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#"> <Link to="/add">Add Patient</Link></Nav.Link>
            <Nav.Link href="#"> <Link to="/edit">Edit Patient info</Link></Nav.Link>
            {/* <Nav.Link href="#"> <Link to="/view">View Patient list</Link></Nav.Link> */}
          </Nav>
        </Navbar> 
        <Switch>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
          {/* <Route exact path="/view">
            <View />
          </Route> */}
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
