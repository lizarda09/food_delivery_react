import img2 from "../../images/world.png";
import "./ExploreWorld.scss";


function ExploreWorld() {
    return (
        <div className="explore_world">
            <div className="container">
                <div className="content">
                    <img src={img2} width="600" alt=""/>
                    <div className="info">
                        <div className="title">A new way to explore the world</div>
                        <div className="text">For decades travellers have reached for Lonely Planet books when
                            looking to plan and execute their perfect
                            trip, but now, they can also let Lonely Planet Experiences lead the way
                        </div>
                        <button className="more">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreWorld;