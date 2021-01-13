
import React from 'react';
import './Base.scss';
import Header from "./components/Header/Header"
import Main from "./components/main/Main"


class App extends React.Component {
  
  render(){
    const pages ={
    page1:"page1",  
    page4:"page2",  
    page3:"page3"  
    }
    return (
      <div className="wrapper">
  <Header/>
 <Main pages={pages}/>
      </div>
    );
  }
  
 
}

export default App;
