import React from 'react'

const AllProject = () => {
    return (
        <div>
            <div className='d-flex text-center' id='nav'>
                <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link  text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
                <Link to="https://github.com/Agboola12" className="nav-link  text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
                <Link to="https://wa.link/f4r799" className="nav-link text-light  fs-7"><i className="fa fa-whatsapp text-success mr-1" aria-hidden="true"></i>Whatsapp</Link>

            </div>
        </div>
    )
}

export default AllProject