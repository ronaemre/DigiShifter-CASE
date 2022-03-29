import React, { useState } from 'react'
import './App.css';
import WebNavbar from './components/WebNavbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListMaterials from './components/ListMaterials';
import AddMaterials from './components/AddMaterials';

function App() {
  const [materials, setMaterials] = useState([])
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <WebNavbar />
                <AddMaterials setMaterials={setMaterials} />
                <ListMaterials materials={materials} setMaterials={setMaterials} />

              </React.Fragment>
            )}>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
