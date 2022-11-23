import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header title="Recipedia" />
      <Search />
    </div>
  );
}

export default App;
