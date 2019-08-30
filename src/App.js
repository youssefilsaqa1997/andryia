import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './About'
import Slider from './Slider';
import Picks from './Picks';
import Categories from './Categories'
import ReporterProfile from './ReporterProfile'
import Magazine from './Magazine'
import Section from './Section'
import Article from './Article'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navigation />
          
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about"  exact component={About} />
          <Route path="/Section"  exact component={Section} />
          <Route path="/magazine"  exact component={Magazine} />
          <Route path="/reporterProfile"  exact component={ReporterProfile} />
          <Route path="/article"  exact component={Article} />
          </Switch>

          <Footer />

        </div>
      </Router>

    );
  }
}
const Home = () => (
  <div>
    <Slider />
    <Picks />
    <Categories />
  </div>
);

export default App;
