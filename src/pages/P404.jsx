import React from 'react';


class page404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        const linesyle={
            textAlign:"center",
            border:"solid red 1px"
        }
        let fish = [];
            for( let i=0 ; i<60 ; i=i+1){
                    fish[i]= <p style={linesyle} key={"hfghg"+i}> {404}</p>;
        
            }
       
        return (
            <>
            <h1>404</h1>
         <section >{fish}</section>  
         </>
        );
    }
}

export default page404;