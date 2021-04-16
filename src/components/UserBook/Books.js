import React from 'react';

const Books = ({data}) => {
    console.log(data)
    // const{name, fullDescription} = order.service;
    return (
        <>
             <div className="col-md-3 mb-4">
                <div className="card text-center">
                    {/* <img src={images} alt="" className="card-img-top"/> */}
                    <div className="card-body">
                        <h5>{data.shipments.name}</h5>
                        {/* <h5>{data.service.name}</h5> */}
                    </div>
                </div>
        </div>
        </>
    );
};

export default Books;