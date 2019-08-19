import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
	return (
		<footer className="rel-footer">
                    <ul className="social-media-links d-flex align-items-center justify-content-center">
                        <li><a href="https://www.facebook.com/tribevibelive/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/TribeVibeLive" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-snapchat-ghost" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.youtube.com/tribevibelive" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/tribevibe.livev/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="https://in.linkedin.com/company/tribevibe-entertainment-pvt-ltd" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </footer>
	)
}

export default Footer