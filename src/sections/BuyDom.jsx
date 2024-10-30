import React from "react";
import backgroundImage from "/src/assets/img/v104_26.png";

function Home() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${backgroundImage})`,
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">$DOM's Gonna win the race... You BET</h1>
                    <p className="mb-5">
                        $DOM is more than just a meme coin; It’s a Fast and Surious path to prosperity. Join DOM's community and HODL to see the potential impact and wealth creation. History is being made on SUI, the future is bright, and the waters are getting stormier,
                        only winners take it all. $DOM's Gonna win the race...
                    </p>
                    <button className="btn btn-primary">Buy Dom</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
