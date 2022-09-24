import "./styles/App.scss";
import Header from "./layout/Header";
import Router from "./Router";
import {useLocation} from 'react-router-dom';


function App() {
  const {pathname} = useLocation()
  
  
  return (
    <div className="App">
      <Header/>        
       <Router> 
       </Router>  
    </div>
  );
}

export default App;
