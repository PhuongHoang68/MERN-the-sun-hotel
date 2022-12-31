import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Dining = () => {

    return (
        <div className = "top">
        <h1 className="text-center text-success my-5" >Come Dine with us!</h1>
        <h4 className="text-center my-5">Operating Hours: Monday-Sunday: 8AM-5PM </h4>
        <h5 className="text-center my-5">Restaurant on the 1st floor, next to lobby!</h5>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Our restaurant is open till mindnight!</h5>
                        <p className="card-text">Fancy a night cap or a night snack? Our hospitable staff have got you covered!</p>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">A good place for business dinner:</h5>
                        <p className="card-text">Looking to conduct a business dinner? We have got good food& drinks to keep your business partner happy!</p>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">A perfect place to grab a drink</h5>
                        <p className="card-text">Come grab a drink at our bar to unwind after a day exploring the city!</p>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">A bright and open atmosphere</h5>
                        <p className="card-text">We pride ourselves in a peaceful ambiance where you could spend time with loved ones</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Dining;