import React from "react";

export default function ContactUs() {
  return (
    <>
      <>
        {/* Page Header Start */}
        <div
          className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center"></div>
        </div>
        {/* Page Header End */}
        {/* Facts Start */}
        <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                    <h1 className="display-12 mb-4 text-center">
                      If You Have Any Query, Please Contact Us
                    </h1>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0 bg-light"
                              id="name"
                              placeholder="First Name"
                            />
                            <label htmlFor="name">First Name</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0 bg-light"
                              id="lastName"
                              placeholder="Last Name"
                            />
                            <label htmlFor="lastName">Last Name</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control border-0 bg-light"
                              id="email"
                              placeholder="Email Address"
                            />
                            <label htmlFor="email">Email Address</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0 bg-light"
                              id="contactNumber"
                              placeholder="Contact Number"
                            />
                            <label htmlFor="contactNumber">
                              Contact Number
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="floatingSelect"
                              aria-label="Inquiring About"
                            >
                              <option selected="">Inquiring About</option>
                              <option value={1}> Single Lesson</option>
                              <option value={2}>
                                {" "}
                                3 x 50 Minute Lesson Package
                              </option>
                              <option value={3}>
                                5 x 50 Minute Lesson Package
                              </option>
                            </select>
                            <label htmlFor="floatingSelect">
                              Inquiring About
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control border-0 bg-light"
                              placeholder="Message"
                              id="message"
                              style={{ height: 150 }}
                              defaultValue={""}
                            />
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary py-3 px-5"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
