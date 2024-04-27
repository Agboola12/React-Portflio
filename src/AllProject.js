import React from 'react'
import { Link } from 'react-router-dom'

const AllProject = () => {
    return (
        <div>
            <div className='d-flex text-center' id='nav'>
                <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link  text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
                <Link to="https://github.com/Agboola12" className="nav-link  text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
                <Link to="https://wa.link/f4r799" className="nav-link text-light  fs-7"><i className="fa fa-whatsapp text-success mr-1" aria-hidden="true"></i>Whatsapp</Link>
            </div>
























            

            <div className='container text-center  p-3 text-light' >
                <div className='row p-5 ' >
                    <div className='col-md-4 mx-auto offset-1'>
                        <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
                    </div>
                    <div className='col-md-4 mx-auto'>
                        <Link to="https://github.com/Agboola12" className="nav-link text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
                    </div>
                </div>
                <small className='text-center'>© 2023 BlackMan, All Rights Reserved</small>

            </div>
        </div>
    )
}

export default AllProject