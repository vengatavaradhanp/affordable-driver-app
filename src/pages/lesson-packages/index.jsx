import React from "react";
import PaypalDialog from "../../components/paypal-dialog/PaypalDialog";
import { LessonsList } from "../../utils/constant";
import AppLoader from "../../components/app-layout/AppLoader";

export default function LessonPackages() {
  const paypalDialogRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const paymentHandler = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          <div
            className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="container"
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h3 className="display-5 text-light mb-0">Lesson Packages</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container-xxl">
            <div className="container">
              <div className="row g-4 justify-content-center">
                <div
                  className="text-center mx-auto mb-0 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h1 className="display-6 mb-4">
                    Driver education course bundles...
                  </h1>
                </div>
                <p>
                  Our 50-minute lesson packages are available for online
                  purchase. After registering your account during checkout, you
                  can conveniently schedule your lessons through our booking
                  calendar.
                </p>
                <h5 className="mb-3">
                  We service Hobart and surrounding suburbs ONLY. For a complete
                  list, please check out our Home page.
                </h5>
                <p>
                  Lessons are conducted in automatic transmission vehicles.
                  Students must present a valid license or permit at the start
                  of each lesson. Please refer to our Code of Conduct for both
                  students and instructors.
                </p>
                <p>
                  Lesson Packages make great gifts! You can buy our digital gift
                  cards and set your amount to cover any of our services.
                </p>

                {LessonsList.map((item, index) => (
                  <div
                    className="col-lg-5 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    key={index}
                  >
                    <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                      <div className="text-center p-4 pt-0">
                        {item.is_popular === 1 ? (
                          <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                            Most Popular
                          </div>
                        ) : (
                          <div className="d-inline-block text-white fs-5 py-3 px-4 mb-4"></div>
                        )}
                        <p>
                          {item.count} x {item.time_per_lesson} Minute Lesson
                        </p>
                        <h1 className="mb-3">
                          {item.count * item.time_per_lesson}
                        </h1>
                        <p>{item.title}</p>
                        <small>Valid for one year</small>
                        <div
                          className="mt-4"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={() =>
                            paypalDialogRef.current.dialogHandler(item)
                          }
                        >
                          <span className="btn btn-primary border-2 w-100">
                            Select
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div
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
            </div> */}
                <p>
                  Lesson Packages, once commenced, are non-refundable and
                  non-transferable and must be used within 1 year of the
                  purchase date. Payment is via Credit/Debit Cards over Stripe's
                  secure payment gateway.
                </p>
              </div>
            </div>
          </div>
          <PaypalDialog ref={paypalDialogRef} paymentHandler={paymentHandler} />
        </>
      )}
    </div>
  );
}
