import img1 from "../../images/thousand.png";
import "./FormPage.scss";

function FormPage() {
    return (
        <div className="form_page">
            <div className="form">
                <div className="name">
                    Explore and Travel
                </div>
                <span className="finder">Holiday finder</span>
                <div className="inputs">
                    <div className="location_input">
                        <input list="location" placeholder="Location"/>
                        <datalist id="location">
                            <option value="Kharkiv"/>
                            <option value="Kiev"/>
                            <option value="Lviv"/>
                        </datalist>
                    </div>
                    <div className="activity_input">
                        <input list="activity" placeholder="Activity"/>
                        <datalist id="activity">
                            <option value="opt1"/>
                            <option value="opt2"/>
                            <option value="opt3"/>
                        </datalist>
                    </div>
                    <div className="grade_input">
                        <input list="grade" placeholder="Grade"/>
                        <datalist id="grade">
                            <option value="opt1"/>
                            <option value="opt2"/>
                            <option value="opt3"/>
                        </datalist>
                    </div>
                    <div className="date_input">
                        <input list="date" placeholder="Date"/>
                        <datalist id="date">
                            <option value="opt1"/>
                            <option value="opt2"/>
                            <option value="opt3"/>
                        </datalist>
                    </div>
                </div>
                <button className="explore">Explore</button>
            </div>
            <img src={img1} height="600" width="600" alt=""/>
        </div>
    )
}

export default FormPage;