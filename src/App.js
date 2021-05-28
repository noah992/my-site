import logo from './logo.svg';
import './App.css';
import Layout from './features/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Projects from './features/Projects/Projects';
import Logo from './features/Main/Logo/Logo'
import Contact from './features/Contact/Contact'

function App() {
  return (
    <>
    <Switch>
      <Route path="/contact">
        <Logo></Logo>
        <Contact></Contact>
      </Route>
      <Route path="/portfolio">
        <Logo></Logo>
        <Projects></Projects>
      </Route>
      <Route path="/">
        <Logo></Logo>
        <Layout></Layout>
      </Route>
      
    </Switch> 
    </>
  );
}

export default App;
