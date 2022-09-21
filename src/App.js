import "./styles/App.scss";
import Footer from "./layout/Footer";
import Register from "./pages/Register";
function App() {
  const data = [
    {
      id: 1,
      name: "sneaker",
      img: "./assets/images/adidas.png",
      description: "the sneaker shoe",
      cost: 10,
    },
    {
      id: 2,
      name: "sneaker",
      img: "./assets/images/nike.png",
      description: "the sneaker nike shoe",
      cost: 20,
    },
  ];

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
