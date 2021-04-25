import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Layout>
          <Portfolio />
        </Layout>
      )} />
      <Route exact path='/about' render={() => (
        <Layout>
          <About />
        </Layout>
      )} />
      <Route exact path='/contact' render={() => (
        <Layout>
          <Contact />
        </Layout>
      )} />
    </Switch>
  );
}

export default App;
