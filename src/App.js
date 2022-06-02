import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';



import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
          <Route exact path='/company'>
            <Company />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          <Route exact path="/NewProject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
