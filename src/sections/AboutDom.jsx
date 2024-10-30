import React from "react";
import sideImage from "/src/assets/img/Dom.png";

function AboutDom() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={sideImage}
                    style={{ width: "576px", height: "420px" }}  // Adjust height if necessary
                    className="rounded-lg shadow-2xl"
                    alt="Side Illustration"
                />
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default AboutDom;
