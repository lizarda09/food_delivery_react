import React from 'react';
import man from "../../images/man.png";
import "./Guids.scss";


const Guids = () => {
    return (
        <div className="guids">
            <div className="container">
                <div className="content">
                    <div className="info">
                        <div className="title">Guides by Thousand Sunny</div>
                        <div className="text">
                            Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
                        </div>
                        <button className="more">Download</button>
                    </div>
                    <img src={man} width="600" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Guids;