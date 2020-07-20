import React from "react";

function About(){
return(
    <div className="container mb-5">
        <div className="card">
            <div className="row">
                <div className="col">
                    <div className="card-header text-center">
                        <h3>About Me</h3>
                    </div>

                </div>
                <div className="card-body col">
                    <p className="card-text">
                        <img src={process.env.PUBLIC_URL + "./assets/img/Michelle_profile.jpg"} className="float-left col-12 col-md-3" alt="Me" />
                        My name is Michelle. I am currently a dental hygienist and an inspiring Front-End web developer.
                        I excel at working in fast-paced and cross functional team environments. I am able to work and
                        collaborate efficiently well with others in overcoming obstacles and constructive feedback. My
                        interest as a web developer stems from my determination for a career which allows me to express
                        my critical thinking abilities and work flexibility.
                    </p>
                    <ul className="list-group inline-block">
                        <li className="list-group-item"><b>Email:</b>m.w.chou21@gmail.com</li>
                        <li className="list-group-item"><b>Phone Number:</b>480-330-5011</li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
);
};

export default About;