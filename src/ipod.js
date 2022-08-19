import React from "react";
import Wheel from "./Wheel";
import Home from "./Home";

class Ipod extends React.Component {
    // constructor(){
    //     super();
    // }
    
    render(){
        return(
            <div style={styles.ipodContainer}>
                <Home/>
                <Wheel/>
            </div>  
        )
    }
}

const styles = {
    ipodContainer : {
        height : '20rem',
        width : '20rem',
        backgroundColor : 'grey',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',

    }
}
export default Ipod;