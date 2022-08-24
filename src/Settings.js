import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Settings extends React.Component{

    constructor(){
        super();
    }

    render(){
        let self = this;
        return(
            <div style={styles.settings} >
                <img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/3524/3524659.png" />
            </div>
        );
    }

}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'75%',
        height:'75%',
        alignSelf : 'center'
    }
}

export default Settings; 