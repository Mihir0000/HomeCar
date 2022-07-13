import React from "react";
import "./Footer.css";

const Footer = ({email, phone, address}) => {
  return (
    <>
      <div class="footer_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="footer_logo">
                <a href="index.html">
                  <img src="static/img/footer-logo.png" alt="footer" />
                </a>
              </div>
              <h1 class="adderss_text">Contact Us</h1>
              <div class="map_icon">
                <img src="static/img/map-icon.png" alt="map" />
                <span class="paddlin_left_0">{address}</span>
              </div>
              <div class="map_icon">
                <img src="static/img/call-icon.png" alt="call" />
                <span class="paddlin_left_0">{phone}</span>
              </div>
              <div class="map_icon">
                <img src="static/img/mail-icon.png" alt="mail" />
                <span class="paddlin_left_0">{email}</span>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="adderss_text">Doctors</h1>
              <div class="hiphop_text_1">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="adderss_text">Useful Links</h1>
              <div class="Useful_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered ,
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="adderss_text">Newsletter</h1>
              <input
                type="text"
                class="Enter_text"
                placeholder="Enter your Email"
                name="Enter your Email"
              />
              <div class="subscribe_bt">
                <a href="/#">Subscribe</a>
              </div>
              <div class="social_icon">
                <ul>
                  <li>
                    <a href="/#">
                      <img src="static/img/fb-icon.png" alt="fb" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="static/img/twitter-icon.png" alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="static/img/linkedin-icon.png" alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src="static/img/instagram-icon.png"
                        alt="instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright_section">
        <div class="container">
          <p class="copyright_text">
            2022 All Rights Reserved. Design by
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
