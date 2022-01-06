
import '../App.css';
import LandingPage from './LandingPage'
import Home from './Home'
import { Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search'


//rfce = create starter component
//'react-router-dom' router import path

// Here we are getting the code from our url which is used for our authorization we convert this code to a token
const code = new URLSearchParams(window.location.search).get('code')



function App() {
  return (
    <div className="App">
       <header className="App-header">

      <Routes> 
        
       <Route 
       path='/'
       element={code ? <Search code={code} /> : <LandingPage />} />
     
       <Route 
       path='/homepage' 
       element={<Home />}
       />
       </Routes>
      
       </header>
     </div>
  );
}

export default App;
