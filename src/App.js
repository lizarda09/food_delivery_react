import logo1 from './images/logo.png'
import img1 from './images/thousand.png'
import img2 from './images/world.png'

import './App.scss';

function App() {
  return (
          <div className="container">
              <header>
                  <img src={logo1} alt=""/>
                      <div className="navbar">
                          <a href="">Home</a>
                          <a href="">Destinations</a>
                          <a href="">About</a>
                          <a href="">Partner</a>
                          <button className="login">Login</button>
                          <button className="register">Register</button>
                      </div>
              </header>
              <div className="form_page">
                  <div className="form">
                      <div className="name">
                          Explore and Travel
                      </div>
                      <span className="finder">Holiday finder</span>
                      <div className="inputs">
                          <div className="location_input">
                              <input list="location" placeholder="Location"/>
                                  <datalist id="location">
                                      <option value="Kharkiv"></option>
                                      <option value="Kiev"></option>
                                      <option value="Lviv"></option>
                                  </datalist>
                          </div>
                          <div className="activity_input">
                              <input list="activity" placeholder="Activity"/>
                                  <datalist id="activity">
                                      <option value="opt1"></option>
                                      <option value="opt2"></option>
                                      <option value="opt3"></option>
                                  </datalist>
                          </div>
                          <div className="grade_input">
                              <input list="grade" placeholder="Grade"/>
                                  <datalist id="grade">
                                      <option value="opt1"></option>
                                      <option value="opt2"></option>
                                      <option value="opt3"></option>
                                  </datalist>
                          </div>
                          <div className="date_input">
                              <input list="date" placeholder="Date"/>
                                  <datalist id="date">
                                      <option value="opt1"></option>
                                      <option value="opt2"></option>
                                      <option value="opt3"></option>
                                  </datalist>
                          </div>
                      </div>
                      <button className="explore">Explore</button>
                  </div>
                  <img src={img1} height="600" width="600" alt=""/>
              </div>
              <div className="explore_world">
                  <div className="container">
                      <div className="content">
                          <img src={img2} width="600" alt=""/>
                              <div className="info">
                                  <div className="title">A new way to explore the world</div>
                                  <div className="text">For decades travellers have reached for Lonely Planet books when
                                      looking to plan and execute their perfect
                                      trip, but now, they can also let Lonely Planet Experiences lead the way
                                  </div>
                                  <button className="more">Learn more</button>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
  );
}

export default App;
