import React from 'react';
import "./FeaturedDestinations.scss";
import raja from "../../images/raja.png"
import fanj from "../../images/fanj.png"
import skadar from "../../images/skadar.png"
import vevey from "../../images/vevey.png"

const FeaturedDestinations = () => {
    return (
        <div className="featuredDestinations">
            <div className="name">Featured destinations</div>
            <div className="photos">
                <div className="raja">
                    <img src={raja} alt=""/>
                    <div className="desc">
                        <div className="name">
                            Raja Ampat
                        </div>
                    </div>
                </div>
                <div className="raja">
                    <img src={fanj} alt=""/>
                    <div className="desc">
                        <div className="name">
                            Fanjingshan
                            China
                        </div>
                    </div>
                </div>
                <div className="raja">
                    <img src={vevey} alt=""/>
                    <div className="desc">
                        <div className="name">
                            Raja Ampat
                        </div>
                    </div>
                </div>
                <div className="raja">
                    <img src={skadar} alt=""/>
                    <div className="desc">
                        <div className="name">
                            Raja Ampat
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedDestinations;