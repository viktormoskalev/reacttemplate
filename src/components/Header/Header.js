import React from "react";
import "./Header.scss";
import logo from './logo.png';
import Nav from '../nav/Nav';



class Header extends React.Component {

render(){

return(
    <React.Fragment>
<div className="header-place"></div>
<header className="header">
    
    <div className="container ">

<div className="header-content">
    <div className="logo">
        <a href="/">
            <img src={logo} alt="Logo"/>
            </a>
    </div>

    <Nav/>

</div>
</div>
</header>


    </React.Fragment>

)

}


}

export default Header;