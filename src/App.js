import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Places } from './pages/Places';
import { Projects } from './pages/Projects';
import { CostEstimator } from './pages/CostEstimator';
import { Contact } from './pages/Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { Masthead } from './components/Masthead';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Masthead />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/places' component={Places} />
              <Route path='/projects' component={Projects} />
              <Route path='/costestimator' component={CostEstimator} />
              <Route path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
