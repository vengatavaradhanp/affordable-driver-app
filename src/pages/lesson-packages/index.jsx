import React from "react";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";

export default function LessonPackages() {
  const paypalDialogRef = React.useRef(null);
  return (
    <>
      <div
        className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center"></div>
      </div>

      <div className="container-xxl">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h1 className="display-6 mb-4">Lesson Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <p>
              Our 50-minute lesson packages are available for online purchase.
              After registering your account during checkout, you can
              conveniently schedule your lessons through our booking calendar.
            </p>
            <h5 className="mb-3">
              We service Hobart and surrounding suburbs ONLY. For a complete
              list, please check out our Home page.
            </h5>
            <p>
              Lessons are conducted in automatic transmission vehicles. Students
              must present a valid license or permit at the start of each
              lesson. Please refer to our Code of Conduct for both students and
              instructors.
            </p>
            <p>
              Lesson Packages make great gifts! You can buy our digital gift
              cards and set your amount to cover any of our services.
            </p>
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    Most Popular
                  </div>
                  <p>3 x 50 Minute Lesson</p>
                  <h1 className="mb-3">190</h1>
                  <p>An Affordable and Practical Start</p>
                  <small>Valid for one year</small>
                  <div
                    className="mt-4"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => paypalDialogRef.current.dialogHandler()}
                  >
                    <span className="btn btn-primary border-2 w-100">
                      Select
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                    Most Popular
                  </div>
                  <p>5 x 50 Minute Lesson</p>
                  <h1 className="mb-3">350</h1>
                  <p>Exceptional Value for New Learners</p>
                  <small>Valid for one year</small>
                  <div className="mt-4">
                    <span className="btn btn-primary border-2 w-100">
                      Select
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                <div className="text-center p-5 ">
                  <p>7 x 50 Minute Lesson</p>
                  <h1 className="mb-3">425</h1>
                  <p>Big Savings & Our Most Requested Package</p>
                  <small>Valid for one year</small>
                  <div className="mt-4">
                    <span className="btn btn-primary border-2 w-100">
                      Select
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                <div className="text-center p-5 ">
                  <p>10 x 50 Minute Lesson</p>
                  <h1 className="mb-3">600</h1>
                  <p>This is the Ultimate Lesson Package</p>
                  <small>Valid for one year</small>
                  <div className="mt-4">
                    <span className="btn btn-primary border-2 w-100">
                      Select
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lesson Packages, once commenced, are non-refundable and
              non-transferable and must be used within 1 year of the purchase
              date. Payment is via Credit/Debit Cards over Stripe's secure
              payment gateway.
            </p>
          </div>
        </div>
      </div>
      <PaypalDialog ref={paypalDialogRef} />
    </>
  );
}
