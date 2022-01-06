import React, { Component } from 'react';   // for styled components
import '../App.css';
import LandingPage from './LandingPage'
import Home from './Home'
import { Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//rfce = create starter component
//'react-router-dom' router import path

// Here we are getting the code from our url which is used for our authorization we convert this code to a token
const code = new URLSearchParams(window.location.search).get('code')


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path='/'
              element={code ? <Home code={code} /> : <LandingPage />} />
            <Route
              path='/homepage'
              element={<Home />} />
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
