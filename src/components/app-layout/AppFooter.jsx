import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

export default function AppFooter() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer mb-0 py-3 wow fadeIn mt-4"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="">
                bookings@expertdrivertraining.com.au
              </a>
              <a className="btn btn-link" href="">
                0424 454 338
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex pt-2 justify-content-center">
                <a className="footer-icon me-3" href="">
                  <img
                    className=""
                    src={whatsapp}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a className="footer-icon me-3" href="">
                  <img
                    className=""
                    src={facebook}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a className="footer-icon me-3" href="">
                  <img
                    className=""
                    src={instagram}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  className="footer-icon me-3"
                  href=""
                  style={{ background: "#fff" }}
                >
                  <img
                    className=""
                    src={twitter}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Code of Conduct
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="">
                Privacy Collection Statement
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div
        className="container-fluid copyright text-light py-2 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <p className="mb-0">© {new Date().getFullYear()} by Datatech Genius. All Rights Reserved</p>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}
