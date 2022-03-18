// Libraries.
import React from "react";
import {Link} from "react-router-dom";

const HomePage = function(){
    return (
        <div className="text-center">
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <div className="display-1 mt-5">
                       Kirill Zhosul
                    </div>
                    <span className="display-6 text-muted">
                        Programmer - Developer
                    </span>
                    <p className="text-danger mt-5 display-6">
                        This page is under development yet!
                    </p>
                    <p className="display-6 mt-5">
                        Pages
                    </p>
                    <div className="row">
                        <div className="col"><Link to="/about" className="btn btn-lg btn-primary">About me</Link></div> 
                        <div className="col"><Link to="/projects" className="btn btn-lg btn-primary">Projects</Link></div>
                        <div className="col"><Link to="/contacts" className="btn btn-lg btn-primary">Contacts</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  

export default HomePage;  