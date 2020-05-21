import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import Skills from './Skill';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => {
    return ( 
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        {/* <Route path="/competences" component={Skills}/> */}
        <Route path="/contact" component={Contact}/> 
        <Route path="/projects" component={Projects}/> 
        {/* <Route path="/resume" component={Resume}/>  */}
    </Switch>
    )
}

export default Main; 