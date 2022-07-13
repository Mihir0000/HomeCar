import React from "react";
import "./header.css";

const header = () => {
  const nav_toggler = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="logo">
            <a href="/">
              <img src="static/img/logo.png" alt="logo_img" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={nav_toggler}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li clasName="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="health.html">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="medicine.html">
                  Medicine
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="news.html">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="client.html">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src="static/img/search-icon.png" alt="search" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Health <br />
                        <span style={{ color: "#151515" }}>Care</span>
                      </h1>
                      <p className="banner_text">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                      <div className="btn_main">
                        <div className="more_bt">
                          <a href="/">Contact Now</a>
                        </div>
                        <div className="contact_bt">
                          <a href="/">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src="static/img/img-1.png" alt="img1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Health <br />
                        <span style={{ color: "#151515" }}>Care</span>
                      </h1>
                      <p className="banner_text">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                      <div className="btn_main">
                        <div className="more_bt">
                          <a href="/">Contact Now</a>
                        </div>
                        <div className="contact_bt">
                          <a href="/">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src="static/img/img-1.png" alt="img1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Health <br />
                        <span style={{ color: "#151515" }}>Care</span>
                      </h1>
                      <p className="banner_text">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                      <div className="btn_main">
                        <div className="more_bt">
                          <a href="/">Contact Now</a>
                        </div>
                        <div className="contact_bt">
                          <a href="/">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src="static/img/img-1.png" alt="img1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-long-arrow-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
            style={{ fontSize: "24px", paddingTop: "4px" }}
          >
            <i
              className="fa fa-long-arrow-right"
              style={{ fontSize: "24px", paddingTop: "4px" }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default header;
