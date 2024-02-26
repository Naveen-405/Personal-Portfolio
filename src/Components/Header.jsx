import React from 'react'

const Header = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-light position-fixed vw-100" style={{zIndex:9999}}>
            <div className="container-fluid">
                <a  className='navbar-brand fs-1 fw-bold ms-2'>N</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
                    <ul className="navbar-nav me-0 mb-lg-0">
                        <li className="nav-item">
                            <a href='#homeMenu'  className="nav-link fw-bold">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='#About' className="nav-link fw-bold">About</a>
                        </li>
                        <li className="nav-item">
                            <a href='#projects'  className="nav-link fw-bold">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href='#skils'  className="nav-link fw-bold">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href='#Achievements' className="nav-link fw-bold">Achivements</a>
                        </li>
                        <li className="nav-item">
                            <a href='#Contactme'  className="nav-link fw-bold">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header