import React from "react";
import "./Client.css";

const Client = () => {
  return (
    <div className="client_section layout_padding">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="client_taital">What People Say</h1>
              <p className="client_text">
                It is a long established fact that a reader will be distracted{" "}
              </p>
              <div className="client_section_2">
                <div className="client_left">
                  <div>
                    <img
                      src="static/img/client-img.png"
                      className="client_img"
                      alt="client-img"
                    />
                  </div>
                </div>
                <div className="client_right">
                  <h3 className="distracted_text">Distracted by</h3>
                  <p className="lorem_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                  <div className="quote_icon">
                    <img src="static/img/quote-icon.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="client_taital">What People Say</h1>
              <p className="client_text">
                It is a long established fact that a reader will be distracted{" "}
              </p>
              <div className="client_section_2">
                <div className="client_left">
                  <div>
                    <img
                      src="static/img/client-img.png"
                      className="client_img"
                      alt="client_img"
                    />
                  </div>
                </div>
                <div className="client_right">
                  <h3 className="distracted_text">Distracted by</h3>
                  <p className="lorem_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                  <div className="quote_icon">
                    <img src="static/img/quote-icon.png" alt="quote" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="client_taital">What People Say</h1>
              <p className="client_text">
                It is a long established fact that a reader will be distracted{" "}
              </p>
              <div className="client_section_2">
                <div className="client_left">
                  <div>
                    <img
                      src="static/img/client-img.png"
                      className="client_img"
                      alt="client_img"
                    />
                  </div>
                </div>
                <div className="client_right">
                  <h3 className="distracted_text">Distracted by</h3>
                  <p className="lorem_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                  <div className="quote_icon">
                    <img src="static/img/quote-icon.png" alt="quote" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#my_slider"
          role="button"
          data-slide="prev"
        >
          <i
            className="fa fa-long-arrow-left"
            style={{ fontSize: "24px", paddingTop: "4px" }}
          ></i>
        </a>
        <a
          className="carousel-control-next"
          href="#my_slider"
          role="button"
          data-slide="next"
        >
          <i
            className="fa fa-long-arrow-right"
            style={{ fontSize: "24px", paddingTop: "4px" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Client;