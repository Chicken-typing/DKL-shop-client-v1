
import "./styles/App.scss";
import Router from "./Router";


function App() {
  localStorage.setItem('userInfor', JSON.stringify({}))
  return (
    <div className="App">
      <Router>
      </Router>

    </div>
  );
}

export default App;

