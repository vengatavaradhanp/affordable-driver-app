import React from "react";
import gift from "../../assets/images/gift.webp";

export default function GiftCard() {
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
        {/* Appointment Start */}
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp text-center"
                data-wow-delay="0.1s"
              >
                <img className="" src={gift} alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <h1 className="display-6 mb-4">Digital Gift Card</h1>
                <p>
                  Give the gift of freedom, confidence, and lifelong skills on
                  the road with our exclusive Expert Driver Training digital
                  gift card!
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-12">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 bg-light"
                          id="enterAmount"
                          placeholder="Enter amount"
                        />
                        <label htmlFor="enterAmount">Enter amount</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control border-0 bg-light"
                          id="quantity"
                          placeholder="Quantity"
                        />
                        <label htmlFor="quantity">Quantity</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="gift">Who's the gift card for?</label>
                      <br />
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btn-check-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btn-check-outlined"
                      >
                        For someone else
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btn-check-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btn-check-outlined"
                      >
                        For myself
                      </label>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0 bg-light"
                          id="email"
                          placeholder="Recipient email"
                        />
                        <label htmlFor="email">Recipient email</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 bg-light"
                          id="recipientName"
                          placeholder="Recipient name"
                        />
                        <label htmlFor="recipientName">Recipient name</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="datepicker">Delivery date</label>
                      <div className="input-group date" id="datepicker">
                        <input type="text" className="form-control" id="date" />
                        <span className="input-group-append">
                          <span className="input-group-text bg-light d-block">
                            <i className="fa fa-calendar" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0 bg-light"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
