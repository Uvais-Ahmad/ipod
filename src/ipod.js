import React from "react";
import Screen from "./Screen";
import ZingTouch from 'zingtouch';

class Ipod extends React.Component {
    constructor(){
        super();
        this.state = {
            activeItem : 'Wallpapers'
        }
    }

    componentDidUpdate(){
        console.log('Updated');
    }

    rotateWheel = ()=>{
        let currentAngle=15;
        let containerElement = document.getElementById('wheel-container');
        let activeRegion = ZingTouch.Region(containerElement);
        let childElement = document.getElementById('inner-container');
        let change = 0;
        let self = this;
        activeRegion.bind(childElement, 'rotate', function(event){
            //Perform Operations
            var newAngle = event.detail.distanceFromLast
            console.log(currentAngle , newAngle);
            
            //Distance from lastPoisiton = newAngle 
            //if newAngle -ve means gesture is anticlockwise otherwise clockwise
            //for Anticlockwise
            if(newAngle < 0){
                console.log("Change in Anti",change);
                change++;
                console.log(self.state);
                if(change === 15 ){
                    console.log('Now Chnage the state Anticlockwise');
                    change=0;

                    //Now change activeItem top to bottm
                    if(self.state.activeItem === 'Wallpapers'){
                        self.setState({
                            activeItem : "Music"
                        })
                    }else if(self.state.activeItem === 'Music'){
                        self.setState({
                            activeItem : "Games"
                        })
                    }else if(self.state.activeItem === 'Games'){
                        self.setState({
                            activeItem : "Settings"
                        })
                    }else if(self.state.activeItem === 'Settings'){
                        self.setState({
                            activeItem : "Wallpapers"
                        })
                    }
                }
            }
            //for Clockwise where newAngle > 0
            else{
                console.log("Change in Clock",change);
                change++;
                if(change === 15 ){
                    console.log('Now Chnage the state clockwise');
                    change=0;

                     //Now change activeItem bottm to top
                    if(self.state.activeItem === 'Wallpapers'){
                        self.setState({
                            activeItem : 'Settings'
                        });
                        console.log(self.state.activeItem)
                    }else if(self.state.activeItem === 'Music'){
                        self.setState({
                            activeItem : "Wallpapers"
                        })
                    }else if(self.state.activeItem === 'Games'){
                        self.setState({
                            activeItem : "Music"
                        })
                    }else if(self.state.activeItem === 'Settings'){
                        self.setState({
                            activeItem : "Games"
                        })
                    }
                }
            }
        });
    }
    
    render(){
        return(
            <div style={styles.ipodContainer}>
                <Screen activeItem={this.state.activeItem}/>
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

    },
    wheelContainer : {
        height : '14rem',
        width : '100%',
        backgroundColor : 'lightgrey',
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
export default Ipod;