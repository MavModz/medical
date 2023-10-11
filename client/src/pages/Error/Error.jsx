import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css"

function Error() {
  return (
    // <div className='error-container'>
    //   <p className='error-main'>Medical</p>
    //   <p className="zoom-area"><b>User</b> you have accessed the wrong link! </p>
    //   <section className="error-container">
    //     <span className="four"><span className="screen-reader-text">4</span></span>
    //     <span className="zero"><span className="screen-reader-text">0</span></span>
    //     <span className="four"><span className="screen-reader-text">3</span></span>
    //   </section>
    //   <div className="link-container">
    //     <Link to="/">
    //   <button className="more-link">Visit Home Page</button>
    // </Link>

    //   </div></div>
    <div className='error-container'>
      <p className='error-main'>Medical</p>
      <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
      <section class="error-container">
        <span>4</span>
        <span><span class="screen-reader-text">0</span></span>
        <span>3</span>
      </section>
      <div class="link-container">
        <Link to="/">
          <button className="more-link">Visit Login Page</button>
        </Link>
      </div>
    </div>
  )
}

export default Error