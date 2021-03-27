 import React from 'react';
 import './App.scss';  
 import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import {Switch, Route} from 'react-router-dom';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import PotfolioPage from './Pages/PotfolioPage';
import { useState } from 'react';
   
 function App() {
  //  Toggle state & function
   const [navToggle, setNavToggle] = useState(false);

   const navClick = () =>{
      setNavToggle(!navToggle)
   }
   return (
     <div className="App">
       <div className={`sidebar ${navToggle ? 'nav-toogle': ''}`}>
         <NavBar />
       </div>
       {/* Toggle Bar */}
       <div className="nav-btn" onClick={navClick}>
         <div className="lines1"></div>
         <div className="lines2"></div>
         <div className="lines3"></div>
       </div>
       <div className="main-content">
         <div className="content">
           <Switch>
             <Route path="/" exact>
             <HomePage /> 
             </Route>
             <Route path="/about" exact>
              <AboutPage /> 
             </Route>
             <Route path="/blogs" exact>
              <BlogsPage /> 
             </Route>
             <Route path="/contacts" exact>
              <ContactPage /> 
             </Route>
             <Route path="/potfolios" exact>
              <PotfolioPage /> 
             </Route>
           </Switch>
         </div>
       </div>
     </div>
   )
 }
 
 export default App
 