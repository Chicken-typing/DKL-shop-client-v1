import "./styles/App.scss";
import Register from "./pages/Register";
import Footer from "./layout/Footer";
import NewsItem from "./components/NewsItem";
import Item from "./components/Item";
import ListItem from "./containers/ListItem";
function App() {
  const data = [
    {
    id: 1,
    name: "sneaker",
    img: "./assets/images/adidas.png",
    description: "the sneaker shoe",
    cost:10,
},
{
  id: 2,
  name: "sneaker",
  img: "./assets/images/nike.png",
  description: "the sneaker nike shoe",
  cost:20,
}
]
  
  return (
    <div className="App">

      <ListItem listItems={data}/>
    </div>
  );
}

export default App;
