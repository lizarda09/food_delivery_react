import React from 'react';
import Header from "./components/Header/Header";
import { BrowserRouter, Route} from "react-router-dom";
import './App.scss';
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Header />
              <Route path="/home" render={()=> <MainPage/>} />
          </div>
      </BrowserRouter>
  );
}

export default App;
