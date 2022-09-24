import "./styles/App.scss";
import Header from "./layout/Header";
import ListNavigation from "./containers/ListNavigation";
import MainPage from "./containers/MainPage";
import Footer from "./layout/Footer";
import Login from '../src/pages/Login'
import Router from "./containers/Router";
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
