import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';


const AllProject = () => {
    return (
        <div>
            <div className='d-flex text-center' id='nav'>
                <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link  text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
                <Link to="https://github.com/Agboola12" className="nav-link  text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
                <Link to="https://wa.link/f4r799" className="nav-link text-light  fs-7"><i className="fa fa-whatsapp text-success mr-1" aria-hidden="true"></i>Whatsapp</Link>
            </div>

            <div id='neww'>
                <div className='container-fluid text-light p-5 ' >
                    <Link to="/" className='text-light'>Go Back</Link>
                    <h2 className='text-center'>Projects</h2>
                    <hr />
                    <div className='container' >
                        <div className='row '>
                            <div className='col-md-4 '>
                                <div className='card text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Love Calculator App</h5>
                                        <small className='card-text'>Love Calculator that enables the user to check the percentage of their love with their crush </small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Vuejs, Bootstrap</small><br /><br/>
                                        <Link to="https://elijayloveapp.netlify.app" className='text-light mr2'><i className="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>
                                    </div>
                                </div><br />
                            </div>

                            <div className='col-md-4 '>
                                <div className='card   text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>TicTakToc</h5>
                                        <small className='card-text'>Users can play game to entertain themselves</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Vuejs, Bootstrap</small><br/><br/>
                                        <Link to="https://elijaytictaktoe.netlify.app" className='text-light mr-2'><i className="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 '>
                                <div className='card    text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Jahnus Bank Management</h5>
                                        <small className='card-text'>A Bank's landing page with the User end and the Admin ends</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Html, Css and Bootstrap</small><br /><br/>
                                        <Link to="https://jahnus-bank.vercel.app/" className='text-light mr-2'><i className="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>
                                    </div>
                                </div><br />
                            </div>

                        </div>

                        <div className='row mt-4'>
                            <div className='col-md-4 '>
                                <div className='card  text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Inventory Management System</h5>
                                        <small className='card-text'>Inventory System for a Pharamacy, it makes the work to be easier for the attendance
                                            and then customer can order whatever they need online too</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Html, Css, Bootstrap, Php and MySQL </small><br /><br/>
                                        <Link to="https://github.com/Agboola12/Inventory-System" className='text-light mr-2'><i class="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>
                                    </div>
                                </div><br />
                            </div>

                            <div className='col-md-4 '>
                                <div className='card    text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>School Management System</h5>
                                        <small className='card-text'>School website and portal, the admin has can apply online </small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Html, Css, Bootstrap, Php and MySQL </small><br/><br/>
                                        <Link to="https://github.com/Agboola12/School-Management" className='text-light mr-2'><i className="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>

                                    </div>
                                </div><br />
                            </div>

                            <div className='col-md-4 '>
                                <div className='card  text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Food App</h5>
                                        <small className='card-text'>The Food app helps people to order food online, it helps to save time and energy.</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Reactjs and Nodejs </small><br />
                                        <Link to="https://jahnus-food-app.vercel.app/" className='text-light mr-2'><i className="fa fa-globe" aria-hidden="true"></i>click here to visit the site</Link>
                                    </div>
                                </div><br />
                            </div>
                        </div>

                        <div className='row mt-4 '>
                            <div className='col-md-4 '>
                                <div className='card   text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Prime</h5>
                                        <small className='card-text'>Prime is a music site , people can check for any artist or band dance to perform on their occassions.</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Vuejs, Nodejs and MySQL</small> <br />
                                        <small>The project is on the building process</small><br />
                                        <Link to="https://elijay-artist-app.vercel.app/" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div>
                            </div>  <br />

                            <div className='col-md-4 '>
                                <div className='card    text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Elijay Anonymous Message</h5>
                                        <small className='card-text'>Anonymous Message is made by someone whose name is not known or not made public</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Reactjs, Tailwind, Nodejs and MongoDb</small><br />
                                        <Link to="https://elijay-anonymous-message.vercel.app/" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div><br />
                            </div>

                            <div className='col-md-4 '>
                                <div className='card    text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>School Learning System</h5>
                                        <small className='card-text'>School Learning System is a made for School, Teachers can signup to the website,
                                            while students can go there to check the resources they need for their class</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Reactjs, Bootstrap, Nodejs and MongoDb</small><br />
                                        <Link to="https://school-learning-project.vercel.app/" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div><br />
                            </div>
                        </div>

                        <div className='row '>
                            <div className='col-md-4 '>
                                <div className='card text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Church Management System</h5>
                                        <small className='card-text'>The Management System is made for church, check out the website for the details  </small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Reactjs, Bootstrap, Nodejs and MongoDb</small><br />
                                        <Link to="https://react-rccg.vercel.app/" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div><br />
                            </div>

                            <div className='col-md-4 '>
                                <div className='card   text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Abaf Company</h5>
                                        <small className='card-text'>Just a simple user's friendly interface for the Company</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Html, Css and Bootstrap</small><br />
                                        <Link to="https://abuaf-company.vercel.app/index.html" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 '>
                                <div className='card   text-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title '>Abaf Company</h5>
                                        <small className='card-text'>Just a simple user's friendly interface for the Brand, Customer can contact the markter for the goods. Checkout the website for the details</small><br /><br />
                                        <small><b>Technologies:</b></small><br />
                                        <small>Reactjs and Bootstrap</small><br />
                                        <Link to="https://product-company.vercel.app/" className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className='w-100'/>
            <div className='container text-center  p-3 text-light ' >
                <div className='row p-5 ' >
                    <div className='col-md-4 mx-auto offset-1'>
                        <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
                    </div>
                    <div className='col-md-4 mx-auto'>
                        <Link to="https://github.com/Agboola12" className="nav-link text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
                    </div>
                    <div className='col-md-4 mx-auto'>
                <Link to="https://wa.link/f4r799" className="nav-link text-light  fs-7"><i className="fa fa-whatsapp text-success mr-1" aria-hidden="true"></i>Whatsapp</Link>
                    </div>
                </div>
                <small className='text-center'>© 2023 BlackMan, All Rights Reserved</small>
            </div>
            </div>

        </div>
    )
}

export default AllProject