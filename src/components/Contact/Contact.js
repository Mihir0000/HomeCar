import React from 'react'
import "./Contact.css"

const Contact = ({author}) => {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
         <h1 className="contact_taital">What we do, {author}</h1>
         <div className="news_section_2">
            <div className="row">
               <div className="col-md-6">
                  <div className="icon_main">
                     <div className="icon_7"><img src="static/img/icon-7.png" alt='icon'/></div>
                     <h4 className="diabetes_text">Diabetes and obesity Counselling </h4>
                  </div>
                  <div className="icon_main">
                     <div className="icon_7"><img src="static/img/icon-5.png" alt='icon'/></div>
                     <h4 className="diabetes_text">Obstetrics and Gynsecology</h4>
                  </div>
                  <div className="icon_main">
                     <div className="icon_7"><img src="static/img/icon-6.png" alt='icon'/></div>
                     <h4 className="diabetes_text">Surgical and medical Oncology</h4>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="contact_box">
                     <h1 className="book_text">Book Appoinment</h1>
                     <input type="text" className="Email_text" placeholder="Name" name="Name"/>
                     <input type="text" className="Email_text" placeholder="Name" name="Name"/>
                     <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                     <div className="send_bt"><a href="/#">SEND</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Contact