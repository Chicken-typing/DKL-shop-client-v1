import "./styles/App.scss";
import Header from "./layout/Header";
import ListNavigation from "./containers/ListNavigation";
import MainPage from "./containers/MainPage";
import Footer from "./layout/Footer";
import Login from '../src/pages/Login'
import Router from "./Router";
import Item from "./components/Item";
import Woman from "./containers/Woman";
import { info } from "autoprefixer";




function App() {

  
  
  return (
    
    <div className="App">
      <Header/>  
      {/* {Data.map((info) => {
        return <Item info={info}/>
      })} */}
      
      {/* <ListNavigation/>       */}
       <Router>
          
       </Router>  
       {/* <Footer/> */}
       {/* <Woman/> */}
    </div>
  );
}

export default App;
