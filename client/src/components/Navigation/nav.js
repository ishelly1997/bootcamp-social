import React, {useState} from "react";

import homeIcon from "../../images/homepage.png"
import networkIcon from "../../images/network.png"
import jobsIcon from "../../images/jobs.png"
import messagesIcon from "../../images/messages.png"
import eventsIcon from "../../images/events.png"
import resourcesIcon from "../../images/resources.png"

import { Link } from "react-router-dom";

const Nav = () => {

    const[color, setColor] = useState();

    return (
        <nav className="navigator">
            <div style={{ background: color }}>
                <Link onClick={()=> setColor("#c8f0fe")} id="navtab" to="/" className="tab-links" >   
                    <img src={homeIcon} alt="/" className="tab-icons"></img>
                    {/* <p className="nav-titles">Home</p> */}
                </Link>
            </div>

            <div style={{ background: color }}>
                <Link onClick={()=> setColor("#fec8e9")} id="navtab" to="/network" className="tab-links">   
                    <img src={networkIcon} alt="/" className="tab-icons" ></img>
                    {/* <p className="nav-titles">Network</p> */}
                </Link>
            </div>

            <div>
                <Link id="navtab" to="/jobs" className="tab-links">   
                    <img src={jobsIcon} alt="/" className="tab-icons"></img>
                    {/* <p className="nav-titles">Jobs</p> */}
                </Link>
            </div>

            <div>
                <Link id="navtab" to="/messaging" className="tab-links">   
                    <img src={messagesIcon} alt="/" className="tab-icons"></img>
                    {/* <p className="nav-titles">Messaging</p> */}
                </Link>
            </div>

            <div style={{ background: color }}>
                <Link onClick={()=> setColor("#fec8e9")} id="navtab" to="/events" className="tab-links">   
                    <img src={eventsIcon} alt="/" className="tab-icons"></img>
                    {/* <p className="nav-titles">Events</p> */}
                </Link>
            </div>

            <div>
                <Link id="navtab" to="/resources" className="tab-links">   
                    <img src={resourcesIcon} alt="/" className="tab-icons"></img>
                    {/* <p className="nav-titles">Resources</p> */}
                </Link>
            </div>
        </nav>
    )
}

export default Nav
