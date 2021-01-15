import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from'./components/Projects'
import Resume from'./components/Resume'
import {AnimatePresence} from 'framer-motion'
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container app__container">
       <div className="row app__row">
       <div className="col-lg-3 ">
         <Sidebar />
        </div>
       <div className="col-lg-9 app__main-content">
         
         <Navbar />

         <AnimatePresence exitBeforeEnter> 
         <Switch> 
         <Route exact path="/">
           <About />
         </Route>
         <Route path="/Resume">
           <Resume />
         </Route>
         <Route path="/Projects" component={Projects} />
          <Route>
            <Redirect to="/" />
          </Route>
          </Switch>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </div>
  );
}
export default App;
