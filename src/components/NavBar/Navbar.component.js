import React from 'react';

import axios from 'axios';


export default class NavBarComponent extends React.Component {
  
 
  render() {
    return (
    
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0"><i className="fa fa-car text-primary2 me-2"></i>Drivin</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="courses.html" className="nav-item nav-link">Courses</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="appointment.html" className="dropdown-item">Appointment</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary2 py-4 px-lg-5 d-none d-lg-block">Get Started<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>


    )

  }
}


