import React from 'react';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component{
    constructor(){
        super();
    }

    rotateWheel = ()=>{
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        activeRegion.bind(childElement, 'rotate', function(event){
            //Perform Operations
            console.log("rotate");
        });
    }

    render = () => {
        return(
            <div style = {styles.wheelContainer} id='wheel-container'>
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <p>Menu</p>
                        </div>

                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/3787/premium/3787347.png?token=exp=1660926733~hmac=ef81a325a179c94ca1a084d153798795" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/3787/premium/3787373.png?token=exp=1660926515~hmac=280d50962a58a5198f228a3e498cc9ca" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://cdn-icons-png.flaticon.com/512/8276/8276517.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    wheelContainer : {
        height : '15rem',
        width : '100%',
        backgroundColor : 'lightgrey',
        alignSelf : 'flex-end'
    },
    wheel : {
        width : '80%',
        height : '90%',
        backgroundColor : 'white',
        margin : '1rem auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        width : '2rem',
        height : '2rem',
    },

}

export default Wheel;