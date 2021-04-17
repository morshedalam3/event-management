import React from 'react';
import './FooterTop.css'
import { Link } from 'react-router-dom';
const FooterTop = () => {
  return (
    <section className="footer-top-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-area">
              <img src="https://i.ibb.co/hcQB3Nz/neerlogo.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 d-flex footer-top-menu-aria">
            <div>
              <ul>
                <li><Link to="/">About Online Event</Link></li>
                <li><Link to="/">Read Our Blog</Link></li>
                <li><Link to="/">Sign up to book</Link></li>
                <li><Link to="/">Add your plan</Link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><Link to="/">Get help</Link></li>
                <li><Link to="/">Event FAQs</Link></li>
                <li><Link to="/">View all Event</Link></li>
                <li><Link to="/">Hotel near me</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;