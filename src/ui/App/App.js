import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';

import Ribbon from '../../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../../packages/used-stack/Components/Modal/Modal';

import './styles/app.css';

const App = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const handleIsOpen = value => {
    setState({ isOpen: value });
  };

  const handleCloseModal = () => {
    setState({ isOpen: false });
  };

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
      <Ribbon text="Used stack" onChange={handleIsOpen} />
      {state.isOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
