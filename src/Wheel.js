import React from "react"; 

class Wheel extends React.Component {
    
    constructor(){
        super();
    }

    render(){
        return(
            <div className="wheel">
                <div className="outer-wheel" id="o-wheel">
                    <div className="inner-wheel">
                    <div className="play-btn menu
                    ">Menu</div>
                    <div className="play-btn forward">R</div>
                    <div className="play-btn backward">L</div>
                    <div className="play-btn bottom">B</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Wheel;