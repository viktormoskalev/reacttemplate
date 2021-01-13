import React from 'react';
import { Router, Route, Switch,Link } from 'react-router-dom'

import page1 from '../../pages/Page1';
import page2 from '../../pages/Page2';
import page404 from '../../pages/P404';
class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <Router>
<ul>
    <li>  <Link to="/page1">Page1</Link> </li>
    <li>  <Link to="/page2">Page2</Link> </li>
</ul>
<Switch>
    <Route exact path="/page1"> component={page1}</Route>
    <Route exact path="/page2"> component={page2}</Route>
    <Route > component={page404}</Route>
</Switch>
           </Router>


        );
    }
}

export default main;