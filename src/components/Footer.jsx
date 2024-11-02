import React from "react";
import logoImage from "/src/assets/img/Logo.png"; // Ensure this path is correct

function Navbar() {
    return (
        <div className="navbar" style={{ backgroundColor: "rgb(33, 93, 180)", width: "100px", margin: "0 auto", textAlign: "center" }}> {/* Set width to 100px and center text */}
            <div className="flex flex-col items-center"> {/* Stack elements vertically */}
                {/* Logo Image */}
                <img src={logoImage} alt="Logo" className="h-16 w-16 rounded-full mb-2" />
                
                {/* Text Section with Improved Colors */}
                <div className="flex flex-col leading-tight">
                    <span className="text-xs font-extrabold uppercase" style={{ color: "rgb(255, 255, 255)" }}>SUIDOM</span>
                    <span className="text-xs font-semibold tracking-wider" style={{ color: "rgb(255, 255, 255)" }}>Fast & Furious on SUI</span>
                </div>
            </div>
            
            {/* Social Buttons */}
            <div className="flex justify-center gap-1 mt-2"> {/* Adjust gap and add margin for spacing */}
                {/* Instagram */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs border-none" // Adjusted text size
                    aria-label="Instagram"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current"> {/* Adjusted icon size */}
                        <path d="M12 2.2c3.2 0 3.5 0 4.7.1 1.1.1 1.7.3 2 .5.5.2.8.5 1.1.9.4.4.7.8.9 1.1.2.3.4.9.5 2 .1 1.2.1 1.5.1 4.7s0 3.5-.1 4.7c-.1 1.1-.3 1.7-.5 2-.2.5-.5.8-.9 1.1-.4.4-.8.7-1.1.9-.3.2-.9.4-2 .5-1.2.1-1.5.1-4.7.1s-3.5 0-4.7-.1c-1.1-.1-1.7-.3-2-.5-.5-.2-.8-.5-1.1-.9-.4-.4-.7-.8-.9-1.1-.2-.3-.4-.9-.5-2-.1-1.2-.1-1.5-.1-4.7s0-3.5.1-4.7c.1-1.1.3-1.7.5-2 .2-.5.5-.8.9-1.1.4-.4.8-.7 1.1-.9.3-.2.9-.4 2-.5 1.2-.1 1.5-.1 4.7-.1zm0 1.8c-3.2 0-3.5 0-4.7.1-.9 0-1.3.2-1.6.4-.3.2-.6.4-.8.8-.2.3-.4.7-.4 1.6-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 .9.2 1.3.4 1.6.2.3.4.6.8.8.3.2.7.4 1.6.4 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c.9 0 1.3-.2 1.6-.4.3-.2.6-.4.8-.8.2-.3.4-.7.4-1.6.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.3-.4-1.6-.2-.3-.4-.6-.8-.8-.3-.2-.7-.4-1.6-.4-1.2-.1-1.5-.1-4.7-.1zM12 5.9a6.1 6.1 0 1 0 0 12.2 6.1 6.1 0 0 0 0-12.2zm0 1.8a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6zm5.8-.9a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"></path>
                    </svg>
                </a>
                
                {/* Telegram */}
                <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-blue-500 text-white text-xs border-none" // Adjusted text size
                    aria-label="Telegram"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current"> {/* Adjusted icon size */}
                        <path d="M21.43 2.79a1.72 1.72 0 0 0-1.72-.15L2.6 10.05a1.71 1.71 0 0 0-.12 3.12l3.63 1.52 1.36 3.65a1.72 1.72 0 0 0 3 .41l2.19-2.63 3.55 2.54c.28.2.61.3.94.3.25 0 .5-.05.73-.15.49-.2.87-.62 1-1.13l3.48-14.07c.15-.62-.08-1.27-.56-1.67zm-4.14 14.25-4.39-3.14-3.27 3.9-1.25-3.35 8.2-7.1-9.67 6.71-.7-2.74 13.08-5.47-2.3 11.19z"></path>
                    </svg>
                </a>
                
                {/* X (Twitter) */}
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-black text-white text-xs border-none" // Adjusted text size
                    aria-label="X"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current"> {/* Adjusted icon size */}
                        <path d="M24 4.5c-.9.4-1.9.7-2.9.8a5 5 0 0 0 2.1-2.8 10 10 0 0 1-3.1 1.2A5 5 0 0 0 16.6 3c-2.8 0-5 2.2-5 5 0 .4 0 .8.1 1.2a14.2 14.2 0 0 1-10.3-5.3A5 5 0 0 0 3.5 8a5 5 0 0 1-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.9a5 5 0 0 1-2.2.1 5 5 0 0 0 4.7 3.5A10 10 0 0 1 0 19a14.2 14.2 0 0 0 7.6 2.2c9.2 0 14.3-7.6 14.3-14.3v-.6c1-.7 1.9-1.6 2.6-2.6z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
