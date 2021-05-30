import logo from './logo.svg';
import './App.css';
import Layout from './features/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Projects from './features/Projects/Projects';
import Logo from './features/Main/Logo/Logo'
import Contact from './features/Contact/Contact'
import componentWrapper from './utils/componentWrapper';
import { BrowserRouter as Router } from "react-router-dom";

export const sum = (a, b) => {
  console.log('features/test');
  return a
}

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/contact">
          {componentWrapper(Contact, true)}
        </Route>
        <Route path="/portfolio">
          <Logo></Logo>
          {componentWrapper(Projects, true)}
        </Route>
        <Route path="/">
          <Logo css={false}></Logo>
          <Layout></Layout>
        </Route>
      </Switch> 
    </Router>
    </>
  );
}

export default App;
