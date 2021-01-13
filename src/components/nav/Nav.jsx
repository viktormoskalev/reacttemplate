import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            navstate:"nav",
         };
    }

   navtoggle= ()=>{

if (this.state.navstate==="nav"){
    this.setState({navstate:"nav nav-open"});
} else {
    this.setState({navstate:"nav"})
}
 }
    navclose=()=>{
        this.setState({navstate:"nav"})
    }
 
 render() {
        return (
            <nav  className={this.state.navstate} >
    <div onClick={this.navclose} className="nav-menu">
        <a href="#test1" className="nav-item"> menu 1</a>
        <a href="#test2" className="nav-item"> menu 2</a>
        <a href="#test3" className="nav-item"> menu 3</a>
        <a href="#test4" className="nav-item"> menu 4</a>
        <a href="#test5" className="nav-item"> menu 5</a>
    
    </div>
   
 <div className="nav-background" onClick={this.navclose}></div>
 <div className="btn-menu" onClick={this.navtoggle}>
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
</div>

</nav>
        );
    }
}

export default Nav;