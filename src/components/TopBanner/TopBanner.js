import React from 'react';
import Banner from '../Banner/Banner';
import SideAnimation from './SideAnimation';

const TopBanner = () => {
    return (
        <section className="row">
           <div className="col-md-6">
            <Banner/>
           </div>
           <div className="col-md-6">
           <SideAnimation/>
           </div>
              
         
        </section>
    );
};

export default TopBanner;