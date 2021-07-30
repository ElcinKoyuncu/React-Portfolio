import React from 'react';
import './style.css';
import note_taker from '../../assets/note_taker.png';
import password_generate from '../../assets/password_generate.png';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import weather_dashboard from '../../assets/weather_dashboard.png';
import work_day_schedular from '../../assets/work_day_schedular.png';



const Card = ({ id, title, description, repoLink, deployedLink, lastUpdated, picturePath }) => {
    let projectID = `0${id}`;
    let projects = [note_taker, password_generate, project1, project2, weather_dashboard, work_day_schedular, ];
    let chosenProjectPic = projects.filter(project => project.includes(picturePath));

    return (
        <div className="card">
            <div className="card-body border border-info border-bottom-0">
                <div className="row">
                    <div className="col-lg-10 border-bottom border-info m-0">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="col-lg-2 border-bottom border-left border-info m-0 d-none d-lg-block">
                        <h3 className="card-title">{projectID}</h3>
                    </div>
                </div>
                <div className="row overflow-auto" style={{height: "110px"}}>
                    <p className="card-text p-2 text-justify">{description}</p>
                </div>
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">Click here for the Github Repo</a><small className="smallGrey" id="deployedLinkMsg"> or click the image for the deployed application</small>
                <p className="card-text"><small className="smallWord">Last updated on {lastUpdated}</small></p>
            </div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><img src={chosenProjectPic} className="card-img-bottom border border-info border-top-0" alt={title} /></a>
        </div>
    )
}

export default Card;