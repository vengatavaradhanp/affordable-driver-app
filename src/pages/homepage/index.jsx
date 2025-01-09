import React from "react";
import bgHome from "../../assets/images/bgHome.jpeg";
import book from "../../assets/images/book.png";
import heart from "../../assets/images/heart.jpg";
import facebook from "../../assets/images/facebooksmall.webp";
import map from "../../assets/images/map.jpg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function HomePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCkew4NnI7F1QTw89mys9ivJBv4LaKRSVU", // Replace with your Google Maps API key
  });
  const [map, setMap] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={bgHome} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h3 className="display-4 text-light mb-5 animated slideInDown">
                        Affordable Driver Training Hobart
                      </h3>
                      <p className="text-light mb-5 animated slideInDown">
                        journey to confident and safe driving begins...
                      </p>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-5">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-item">
              <img className="w-100" src="img/bgHome.jpeg" alt="Image">
              <div className="carousel-caption">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-7">
                              <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                              <a href="" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                              <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div> */}
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button> */}
        </div>
      </div>
      {/* Carousel End */}
      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: 150 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img className="w-100" src={book} alt="Image" />
                  </div>
                  <div className="ps-4">
                    <h5>We provide Certfied Instructors</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: 150 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img className="w-100" src={heart} alt="Image" />
                  </div>
                  <div className="ps-4">
                    <h5>
                      We specialize in assisting nervous or anxious drivers
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-4"
                style={{ minHeight: 150 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img className="w-100" src={facebook} alt="Image" />
                  </div>
                  <div className="ps-4">
                    <h5>Our students rate us 10/10</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Courses Start */}
      <div className="container-xxl courses my-6 py-0 pb-0">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-2" />
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    $65
                  </div>
                  <h5 className="mb-3">Single Lesson</h5>
                  <p>
                    Single Lessons: Ideal for beginners seeking an introductory
                    session or experienced drivers desiring a refresher.
                  </p>
                  <p>
                    Easy Booking: Schedule online with immediate confirmation.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img className="img-fluid" src={bgHome} alt="" />
                  <div className="courses-overlay">
                    <a className="btn btn-outline-primary border-2" href="">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    $55
                  </div>
                  <h5 className="mb-3">Package lesson</h5>
                  <p>For exceptional value, explore our lesson packages:</p>
                  <p>
                    Package Options: Choose from 3,5, 7, or 10 lessons, each
                    designed to offer significant savings.
                  </p>
                  <p>
                    Ideal Gifts: Our lesson packages make thoughtful presents.
                    Digital gift cards are available for all services.
                  </p>
                </div>
                <div className="position-relative mt-auto">
                  <img className="img-fluid" src={bgHome} alt="" />
                  <div className="courses-overlay">
                    <a className="btn btn-outline-primary border-2" href="">
                      Packages
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2" />
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                  <div className="text-center p-4 pt-0">
                      <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$135</div>
                      <h5 className="mb-3">P1 Assessments</h5>
                      <p>If it's time to get your full Licence, take your test with Us!</p>
                      <p>We are accredited P1 Assessors working on behalf of State Growth and we're servicing the North Hobart, Glenorchy, Kingston, Bellerive, Moonah, Huonville, Sorell and New Norfolk Assessment Routes.</p>
                          <p>Please visit our P1 Assessment page for more information.</p>
                   
                  </div>
                  <div className="position-relative mt-auto">
                      <img className="img-fluid" src="img/card3.jpg" alt="">
                      <div className="courses-overlay">
                          <a className="btn btn-outline-primary border-2" href="">P1 Assessments</a>
                      </div>
                  </div>
              </div>
          </div>
          */}
          </div>
        </div>
      </div>
      {/* Courses End */}
      {/* Features Start */}
      <div className="container-xxl py-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-6 mb-4">Servicing</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* <Marker position={currentLocation} /> */}
                </GoogleMap>
              ) : (
                <div>Map is Loading...</div>
              )}
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>
                We undertake Driving Lessons in the following Tasmanian suburbs:
              </h5>
              <p>
                Derwent Park, Glebe, Glenorchy, Goodwood, Hobart CBD, Lenah
                Valley, Lutana, Montagu Bay, Montrose, Moonah, Mount Stuart, New
                Town, North Hobart, Rose Bay, Rosny, West Hobart.
              </p>
              <p>
                We also service Kingston and surrounding suburbs from a
                designated drop-off &amp; pick-up location.
              </p>
              <p>
                For suburbs not listed, please call us to see if we can make
                alternative arrangements.
              </p>
              <a className="btn btn-outline-primary border-2" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* Team Start */}
      {/* <div className="container-fluid py-6 bg-custom">
  <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
          <h1 className="display-6 mb-4">What's Said About Us...</h1>
      </div>
      <div className="panel-body">
          <ul className="list-group">
              <li className="list-group-item">
                  <div className="row">
                      <div className="col-xs-2 col-md-1">
                          <img src="img/facebook.png" className="img-circle img-responsive" alt="" /></div>
                      <div className="col-xs-10 col-md-11">
                          <div>
                              <a href="">
                                  Louille Reodique</a>
                              <span className="text-right d-flex justify-content-end dates">
                                  Dec 7, 2023
                              </span>
                           
                          </div>
                          <div className="rating-star "><span className="image-responsive stars color"><span className="rating-star-5"></span></span></div>
                         
                      </div>
                      <div className="comment-text mt-2">
                          awesome job aziz. very professional. i couldn't have gotten my lisence without him 😊
                      </div>
                  </div>
              </li>
              <li className="list-group-item">
                  <div className="row">
                      <div className="col-xs-2 col-md-1">
                          <img src="img/facebook.png" className="img-circle img-responsive" alt="" /></div>
                      <div className="col-xs-10 col-md-11">
                          <div>
                              <a href="">
                                  Michael Saleh</a>
                              <span className="text-right d-flex justify-content-end dates">
                                  Nov 8, 2023
                              </span>
                              
                          </div>
                          <div className="rating-star "><span className="image-responsive stars color"><span className="rating-star-5"></span></span></div>
                         
                      </div>
                      <div className="comment-text mt-2">
                          
Thank you Aziz one the best instructors iv been learning with . Highly recommended
                      </div>
                  </div>
              </li>
            
          </ul>
      </div>
      <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-5">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
  </div>

    </div> */}
    </>
  );
}
