import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Spinner from './Components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage.component'));
const ClosedOppPortolioPage = lazy(() => import('./pages/portfolio-closedop.component'));
const EquitiedPortolioPage = lazy(() => import('./pages/portfolio-equitied.component'));
const CandyCrushPage = lazy(() => import('./pages/portfolio-candycrush.component'));

const App = () => {
    return (
      <div className="App">
        <Router>
          <div>
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Suspense fallback={<Spinner />}>
                <Route exact path = '/' component={HomePage} />
                <Route path = '/closedop-portfolio' component={ClosedOppPortolioPage} />
                <Route path = '/equitied-portfolio' component={EquitiedPortolioPage} />
                <Route path = '/candycrush-portfolio' component={CandyCrushPage} />
              </Suspense>
            </Switch>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/closedop-portfolio">ClosedOp</Link>
              </li>
              <li>
                <Link to="/equitied-portfolio">Equitied</Link>
            </li>
            <li>
              <Link to="/candycrush-portfolio">Play Candy Crush</Link>
            </li>
          </ul>
          <hr />
          </div>
        </Router>
      </div>
      
    );
  }

export default App;
