import Header from "./components/Header/Header";
import FormPage from "./components/FormPage/FormPage";
import ExploreWorld from "./components/ExploreWorld/ExploreWorld";
import './App.scss';


function App() {
  return (
          <div className="container">
              <Header />
              <FormPage />
              <ExploreWorld />
          </div>
  );
}

export default App;
