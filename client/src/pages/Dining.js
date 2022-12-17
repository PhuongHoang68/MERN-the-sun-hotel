import React from "react";
import Bookings from "../components/BookedDates";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dining = () => {

    return (
        <>
        <h1 className="text-center text-success my-5">Come Dine with us!</h1>
        <h4 className="text-center my-5">Operating Hours: Monday-Sunday: 8AM-5PM </h4>
        <h5 className="text-center my-5">Restaurant on the 1st floor, next to lobby!</h5>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.pexels.com/photos/3201919/pexels-photo-3201919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Dining;