import "./styles/App.scss";
import Header from "./layout/Header";
import ListNavigation from "./containers/ListNavigation";


function App() {
  return (
    <div className="App">
      <Header/>
      <ListNavigation/>
    </div>
  );
}

export default App;
