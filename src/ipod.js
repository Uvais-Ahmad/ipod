import React from "react";
import Wheel from "./Wheel";


class Ipod extends React.Component {
    // constructor(){
    //     super();
    // }

    rotateWheel = ()=>{
        var containerElement = document.getElementById('wheel-container');
    }
    
    render(){
        return(
            <div style={styles.ipodContainer}>
                <Wheel/>
            </div>  
        )
    }
}

const styles = {
    ipodContainer : {
        height : '30rem',
        width : '16rem',
        backgroundColor : 'grey',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'coloumn',
        justifyContent : 'center'

    }
}
export default Ipod;