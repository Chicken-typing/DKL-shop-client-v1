import "./styles/App.scss";
import React, {useState, useEffect} from "react";
import Header from "./layout/Header";
import Router from "./Router";





function App() {

  // const [position, setPosition] = useState(window.pageYOffset)
  //   const [visible, setVisible] = useState(true) 
  //   useEffect(()=> {
  //       const handleScroll = () => {
  //          const moving = window.pageYOffset
           
  //          setVisible(position > moving);
  //          setPosition(moving)
  //       };
  //       window.addEventListener("scroll", handleScroll);
  //       return(() => {
  //          window.removeEventListener("scroll", handleScroll);
  //       })
  //   })
  
  // const cls = visible ? "visible" : "hidden";
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
