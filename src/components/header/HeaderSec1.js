import React from "react";
import "./HeaderSec1.css"


function HeaderSec1() {
    return (
        <div className="headerSec1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 headerSec1__info headerSec1__cols">
                        <p>ACE just rolled out Partner Programs. <span>Check Now!</span> </p>
                        
                    </div>
                    <div className="col-5 headerSec1__querry headerSec1__cols">
                        <p>Any Questions? Call  Us Now+1 (XXX) XXX-XXXX</p>
                    </div>
                    <div className="col-2 headerSec1__contact headerSec1__cols">
                        <p>Contact Support</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeaderSec1
