import React from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.ContactUs}>
      <div className="section pb-5 container">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact Us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="form-header blue accent-1">
                  <h3>
                    <i className="fas fa-envelope"></i>Write to us:
                  </h3>
                </div>

                <p>We'll write rarely, but with only the best content.</p>
                <br />

                <div className="md-form">
                  <i className="fas fa-user prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-name"
                    className="form-control"
                    placeholder="Your name"
                  />
                  <label htmlFor="form-name"></label>
                </div>

                <div className="md-form">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-email"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <label htmlFor="form-email"></label>
                </div>

                <div className="md-form">
                  <i className="fas fa-tag prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-Subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                  <label htmlFor="form-Subject"></label>
                </div>

                <div className="md-form">
                  <i className="fas fa-pencil-alt prefix grey-text"></i>
                  <textarea
                    id="form-text"
                    className="form-control md-textarea"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                  <label htmlFor="form-text"></label>
                </div>
                <div className="text-center text-md-center">
                  <button>SUBMIT</button>
                </div>
                <div className="status"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              id="map-container-google-11"
              className="z-depth-1-half map-container-6"
              style={{ height: "400px" }}
            >
              <iframe
              title="TTN"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4637463415197!2d77.4324780509907!3d28.49569208238591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce670fa863f67%3A0x302ea32b4f957d29!2sTO%20THE%20NEW!5e0!3m2!1sen!2sin!4v1590957282971!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{border:"0"}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
