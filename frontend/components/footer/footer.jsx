import React from "react";

const Footer = () => {
    return (
        <div className="footer-container" >
            <div className="session-footer" >
                <footer className="footer" >
                    <ul className="footer-list" >
                        <li>
                            <a href="https://dorotaaa.github.io/" target="_blank">Portfolio</a>
                        </li>

                        <li>
                            <a href="https://angel.co/dorota-sawicki?public_profile=1" target="_blank">AngelList</a>
                        </li>

                        <li>
                            <a href="https://github.com/dorotaaa" target="_blank">Github</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/dorota-sawicki" target="_blank">LinkedIn</a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        </li>

                        <span className="footer-copyright">
                            &copy; 2019 posergram
                        </span>
                    </ul>
                </footer>
            </div>
        </div>
    )
};

export default Footer;