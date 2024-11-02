import React from "react";
import sideImage from "/src/assets/img/v104_17.png";

function About() {
    return (
        <section
            id="about"
            className="hero min-h-screen snap-center"
            style={{ backgroundColor: "rgb(231, 143, 129)" }} // Background color
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={sideImage}
                    style={{ width: "818px", height: "560px" }}
                    alt="Illustration"
                />
                <div className="flex flex-col gap-y-5">
                    <h1
                        className="prose font-bold text-5xl leading-normal tracking-wide"
                        style={{ color: "rgb(255, 255, 255)" }} // Text color for h1
                    >
                        A Community Owned Meme Coin Inspired by the fast and the furious - DOM on SUI
                    </h1>
                    <p
                        className="prose leading-normal tracking-wide"
                        style={{ color: "rgb(255, 255, 255)" }} // Text color for p
                    >
                        I used to say I live my life a quarter mile at a time and I think that's why we were brothers - because you did too. No matter where you are, whether it's a quarter mile away or halfway across the world, you'll always be with me. And you'll always be my brother.
                    </p>
                    <a href="https://github.com/mukund-ks/DeepLabV3Plus-PyTorch" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary leading-normal tracking-wide text-base">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
