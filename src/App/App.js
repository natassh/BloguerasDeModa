import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';

import Ribbon from '../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../packages/used-stack/Components/Modal/Modal';

import './styles/app.css';

class App extends React.Component {
  state = {
    isOpen: ''
  };
  handleIsOpen = value => {
    this.setState({ isOpen: value });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="App">
        <section>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blogger/:id" component={Detail} />
            </Switch>
          </Router>
        </section>
        <Ribbon text="Used stack" onChange={this.handleIsOpen} />
        {this.state.isOpen && <Modal onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
/*
import React from 'react';

class App extends React.Component {
  componentDidMount = () => {
    // OPCION 1
    const endoPoint = 'https://api.airtable.com/v0/app7a24aZSpdSNeO7/Blogueras';
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer keyVRnE63H7lG8smk'
      }
    };
    //const API_URL ='https://api.airtable.com/v0/app7a24aZSpdSNeO7/Blogueras';
    fetch(endoPoint, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return <h1>fetch</h1>;
  }
}

export default App;
*/
/*
// OPCION 2
    const endoPoint =
      'https://api.airtable.com/v0/app7a24aZSpdSNeO7/Blogueras?api_key=keyVRnE63H7lG8smk';
    fetch(endoPoint + 'getEvent', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer keyVRnE63H7lG8smk'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
*/
