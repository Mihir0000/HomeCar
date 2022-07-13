import React from "react";
import "./News.css";

const News = ({time}) => {
  return (
    <div className="news_section layout_padding">
      <div className="container">
        <h1 className="health_taital">Why choose {time} home care</h1>
        <p className="health_text">
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <div className="news_section_2 layout_padding">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="box_main">
                <div className="icon_1">
                  <img src="static/img/icon-2.png" alt="icon" />
                </div>
                <h4 className="daily_text">Daily care experts</h4>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="box_main active">
                <div className="icon_1">
                  <img src="static/img/icon-3.png" alt="icon" />
                </div>
                <h4 className="daily_text_1">Available 24/7</h4>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="box_main">
                <div className="icon_1">
                  <img src="static/img/icon-4.png" alt="icon" />
                </div>
                <h4 className="daily_text_1">Balanced care</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="getquote_bt">
          <a href="/#">
            Get A Quote
            <span>
              <img src="static/img/right-arrow.png" alt="right-arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
