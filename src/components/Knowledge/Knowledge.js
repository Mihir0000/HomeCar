import React from 'react'
import "./Knowledge.css"

const Knowledge = () => {
  return (
    <div className="knowledge_section layout_padding">
      <div className="container">
         <div className="knowledge_main">
            <div className="left_main">
               <h1 className="knowledge_taital">Knowledge of center</h1>
               <p className="knowledge_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="right_main">
               <div className="play_icon"><a href="/#"><img src="/static/img/play-icon.png" alt='play'/></a></div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Knowledge