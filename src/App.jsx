
import "./styles/App.scss";
import Router from "./Router";
import { useSelector } from "react-redux";
import _ from 'lodash'

function App() {
  const user = useSelector(state => state.User.userInfor)
  if (_.isEmpty(user))
    localStorage.setItem('userInfor', JSON.stringify(user))
  return (
    <div className="App">
      <Router>
      </Router>

    </div>
  );
}

export default App;

