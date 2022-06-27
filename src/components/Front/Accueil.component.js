import React from 'react';

import axios from 'axios';


export default class Accueil extends React.Component {
  
 
  render() {
    return (

        <div>
    {/*  Carousel Start  */}
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption" style={{ left:"0px", right:"0px" }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <h1 className="display-2 text-light mb-5 animated slideInDown">Learn To Drive With Confidence</h1>
                                    <a href="" className="btn btn-primary2 py-sm-3 px-sm-5">Learn More</a>
                                    <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/cr1.jpg" alt="Image" />
                    <div className="carousel-caption" style={{ left:"0px", right:"0px" }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                                    <a href="" className="btn btn-primary2 py-sm-3 px-sm-5">Learn More</a>
                                    <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/*  Carousel End  */}


    {/*  Facts Start  */}
    <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }} >
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square bg-primary2">
                                <i className="fa fa-car text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5>Easy Driving Learn </h5>
                                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }} >
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square bg-primary2">
                                <i className="fa fa-users text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5>National Instructor</h5>
                                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }} >
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square bg-primary2">
                                <i className="fa fa-file-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5>Get licence</h5>
                                <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Facts End  */}


    {/*  About Start  */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                        <img className="position-absolute w-100 h-100" src="img/about-1.jpg" alt="" style={{ objectFit: "cover" }} />
                        <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="img/about-2.jpg" alt="" style={{ width: "200px" , height: "200px" }} />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h6 className="text-primary2 text-uppercase mb-2">About Us</h6>
                        <h1 className="display-6 mb-4">We Help Students To Pass Test & Get A License On The First Try</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-2 mb-4 pb-2">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary2 me-2"></i>Fully Licensed
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary2 me-2"></i>Online Tracking
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary2 me-2"></i>Afordable Fee 
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary2 me-2"></i>Best Trainers
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <a className="btn btn-primary2 py-3 px-5" href="">Read More</a>
                            </div>
                            <div className="col-sm-6">
                                <a className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2" href="tel:+0123456789">
                                    <span className="flex-shrink-0 btn-square bg-primary2">
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </span>
                                    <span className="px-3">+012 345 6789</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  About End  */}


    {/*  Courses Start  */}
    <div className="container-xxl courses my-6 py-6 pb-0">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                <h6 className="text-primary2 text-uppercase mb-2">Tranding Courses</h6>
                <h1 className="display-6 mb-4">Our Courses Upskill You With Driving Training</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                        <div className="text-center p-4 pt-0">
                            <div className="d-inline-block bg-primary2 text-white fs-5 py-1 px-4 mb-4">$99</div>
                            <h5 className="mb-3">Automatic Car Lessons</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary2 me-2"></i>Beginner</li>
                                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary2 me-2"></i>3 Week</li>
                            </ol>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/courses-1.jpg" alt="" />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                        <div className="text-center p-4 pt-0">
                            <div className="d-inline-block bg-primary2 text-white fs-5 py-1 px-4 mb-4">$99</div>
                            <h5 className="mb-3">Highway Driving Lesson</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary2 me-2"></i>Beginner</li>
                                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary2 me-2"></i>3 Week</li>
                            </ol>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/courses-2.jpg" alt="" />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                        <div className="text-center p-4 pt-0">
                            <div className="d-inline-block bg-primary2 text-white fs-5 py-1 px-4 mb-4">$99</div>
                            <h5 className="mb-3">International Driving</h5>
                            <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item small"><i className="fa fa-signal text-primary2 me-2"></i>Beginner</li>
                                <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary2 me-2"></i>3 Week</li>
                            </ol>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/courses-3.jpg" alt="" />
                            <div className="courses-overlay">
                                <a className="btn btn-outline-primary border-2" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary2 text-center p-5">
                        <h1 className="mb-4">Make Appointment</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                                        <label htmlFor="gname">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                                        <label htmlFor="gmail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                                        <label htmlFor="cname">Courses Type</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                                        <label htmlFor="cage">Car Type</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Courses End  */}


    {/*  Features Start  */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary2 text-uppercase mb-2">Why Choose Us!</h6>
                    <h1 className="display-6 mb-4">Best Driving Training Agency In Your City</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary2 me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Fully Licensed</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary2 me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Tracking</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary2 me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Afordable Fee</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary2 me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Best Trainers</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="position-relative overflow-hidden pe-5 pt-5 h-100" style={{ minHeight : "400px" }}>
                        <img className="position-absolute w-100 h-100" src="img/about-1.jpg" alt="" style={{ objectFit: "cover" }} />
                        <img className="position-absolute top-0 end-0 bg-white ps-3 pb-3" src="img/about-2.jpg" alt="" style={{ width: "200px", height: "200px" }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Features End  */}


    {/*  Team Start  */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }} >
                <h6 className="text-primary2 text-uppercase mb-2">Meet The Team</h6>
                <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
            </div>
            <div className="row g-0 team-items">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="img/team-1.jpg" alt="" />
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Full Name</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="img/team-2.jpg" alt="" />
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Full Name</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="img/team-3.jpg" alt="" />
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Full Name</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src="img/team-4.jpg" alt="" />
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Full Name</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Team End  */}


    {/*  Testimonial Start  */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }} >
                <h6 className="text-primary2 text-uppercase mb-2">Testimonial</h6>
                <h1 className="display-6 mb-4">What Our Clients Say!</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-1.jpg" alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-quote-left fa-2x text-primary2"></i>
                                </div>
                            </div>
                            <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px" , height: "60px" }}>
                                    <i className="fa fa-quote-left fa-2x text-primary2"></i>
                                </div>
                            </div>
                            <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px" , height: "60px;" }}>
                                    <i className="fa fa-quote-left fa-2x text-primary2"></i>
                                </div>
                            </div>
                            <p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto" />
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Testimonial End  */}


   </div>
    
    


    )

  }
}


