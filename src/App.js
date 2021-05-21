import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'video-react/dist/video-react.css';



// import { Navigation } from './Pages/Navigation';

import Navigation from '../src/Pages/Navigation'

import MainContent from '../src/components/Home/MainContent';
import About from '../src/Pages/About';
import Resume from '../src/Pages/Resume';
import Contact from '../src/Pages/Contact';
import Portfolio from '../src/Pages/Portfolio';
import Breakdowns from '../src/Pages/Breakdowns';
import Blog from '../src/Pages/Blog';
import Blogpage from '../src/components/Blog/Blogpage';
import Tutorials from '../src/Pages/Tutorials';




function App() {
  return (
    <div className="App">




      <Router>

        <Navigation></Navigation>

        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/About" exact component={About} />
          <Route path="/Portfolio" exact component={Portfolio} />
          <Route path="/Breakdowns" exact component={Breakdowns} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Blog/Blogpage" exact component={Blogpage} />
          <Route path="/Tutorials" exact component={Tutorials} />
          <Route path="/Resume" exact component={Resume} />
          <Route path="/Contact" exact component={Contact} />


        </Switch>

      </Router>
    </div>
  );
}

export default App;
