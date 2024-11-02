import React from "react";
import sideImage from "/src/assets/img/Dom.png";

function AboutDom() {
    return (
        <div className="hero bg-base-200 min-h-screen" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={sideImage}
                    style={{ width: "576px", height: "420px" }} // Maintain existing image dimensions
                    className="rounded-lg shadow-2xl"
                    alt="Side Illustration"
                />
                <div className="ml-6"> {/* Added margin-left for spacing */}
                    <h1 className="text-5xl font-bold" style={{ color: "rgb(85, 85, 85)" }}>
                        As a True HERO, DOM Stands For
                    </h1>
                    {/* Customized horizontal line */}
                    <hr style={{ width: "62px", height: "4px", backgroundColor: "rgb(33, 93, 180)", border: "none", margin: "1rem 0"}} />
                    <ul className="py-6">
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Fast</li>
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Furious</li>
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Winning</li>
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Family</li>
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Brotherhood</li>
                        <li className="text-2xl" style={{ color: "rgb(85, 85, 85)" }}>Community</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutDom;
