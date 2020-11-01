import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layouts/Navbar'
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';



const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Container>
      </Fragment>
    </Router>

  );
}

export default App;
