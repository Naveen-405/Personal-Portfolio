import React from 'react'
import '../Style/footerstyle.css'

const Footer = () => {
  return (
    <div>
    <footer className='mt-5'>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3>Info</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skils">Skils</a></li>
                        <li><a href="#Achievements">Achievements</a></li>

                    </ul>
                </div>
                <div class="col-md-3">
                    <h3>Getting Started</h3>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Whatsapp</a></li>
                        <li><a href="#">Telegram</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3>ContactMe</h3>
                    <ul>
                        <li><a href="#Contactme">Phone</a></li>
                        <li><a href="mailto:naveenponnusami@gmail.com">Gmail</a></li>
                        <li><a href="#footer">Address </a></li>
                        <address className='text-dark'>
                            Tiruppur <br />     
                            TamilNadu-641607
                        </address>
                    </ul>
                </div>
            </div>
        </div>


    </footer>
    <h2 className='text-center mb-2 fw-bold fs-3'>&copy; 2024, All rights reserved.</h2>

    </div>
  )
}

export default Footer