import React from 'react'
// import { Link } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import agbo from './agbo.png'

function App() {
  return (
    <div>


          <div className='d-flex text-center' id='nav'>
          <Link to="https://www.linkedin.com/in/elijah-iyanuoluwa-agboola-6b2631203" className="nav-link  text-light  fs-7"><i className="fa fa-linkedin text-success mr-1" aria-hidden="true"></i>LinkedIn</Link>
          <Link to="https://github.com/Agboola12" className="nav-link  text-light fs-7"><i className="fa fa-github text-success mr-1" aria-hidden="true"></i>Github</Link>
          <Link to="https://wa.link/f4r799" className="nav-link text-light  fs-7"><i className="fa fa-whatsapp text-success mr-1" aria-hidden="true"></i>Whatsapp</Link>

          </div>

      <header className=''>
          <div className='container text-center text-light pt-5'>
                <img src={agbo}  alt="agboimage" />
                <h2>I'm Agboola Elijah </h2>
                <p>A Full Stack Developer who specializes in building fast, beautiful and responsive websites and web applications.</p>
                <p>Got Anything? Contact me</p>
               
              <div className='mt-5'>
                <a href='#project' >  
                <button className="btn mr-2">  My Projects</button>
                </a>
                <a href='https://docs.google.com/document/d/1z3nDj50YMeYiE_h_Ae9U7RhSrK8jD2m6LJZiFdPP8FY/edit?usp=sharing' >  
                <button className="btn ml-3">  Curriculum Vitea</button>
                </a>

              </div>

          </div>
          <div className='container-fluid text-light ' id='project'>
              <h2 className='text-center'>Projects</h2>
              <hr />
              <div className='container' >
                <div className='row '>
                    
                    <div className='col-md-4 '>
                    <div className='card    text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Jahnus Bank Management</h5>
                          <small className='card-text'>A Bank's landing page with the User end and the Admin ends</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Html, Css and Bootstrap</small><br/>
                          <Link to="https://jahnus-bank.vercel.app/"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                        </div>
                      </div><br/>
                    </div>

                      <div className='col-md-4 '>
                    <div className='card    text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Love Calculator App</h5>
                          <small className='card-text'>Love Calculator that enables the user to check the percentage of their love with their crush </small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Vuejs, Bootstrap</small><br/>
                          <Link to="https://elijayloveapp.netlify.app"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                        </div>
                      </div><br/>
                    </div>

                      <div className='col-md-4 '>
                    <div className='card   text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>TicTakToc</h5>
                          <small className='card-text'>Users can play game to entertain themselves</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Vuejs, Bootstrap</small><br/>
                          <Link to="https://elijaytictaktoe.netlify.app"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                          
                          </div>
                      </div>
                    </div>  
                    
                </div>

                <div className='row mt-4'>
                    <div className='col-md-4 '>
                    <div className='card  text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Inventory Management System</h5>
                          <small className='card-text'>Inventory System for a Pharamacy, it makes the work to be easier for the attendance
                          and then customer can order whatever they need online too</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Html, Css, Bootstrap, Php and MySQL </small><br/>
                          <Link to="https://github.com/Agboola12/Inventory-System"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                        </div>
                      </div><br/>
                    </div>

                      <div className='col-md-4 '>
                    <div className='card    text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>School Management System</h5>
                          <small className='card-text'>School website and portal, the admin has can apply online </small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Html, Css, Bootstrap, Php and MySQL </small><br/>
                          <Link to="https://github.com/Agboola12/School-Management"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>

                        </div>
                      </div><br/>
                    </div>

                    <div className='col-md-4 '>
                    <div className='card  text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Food App</h5>
                          <small className='card-text'>The Food app helps people to order food online, it helps to save time and energy.</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Reactjs and Nodejs </small><br/>
                          <Link to="https://jahnus-food-app.vercel.app/"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>                          
                        </div>
                    </div><br/>
                      </div>
                </div>

                <div className='row mt-4 '>
                      <div className='col-md-4 '>
                    <div className='card   text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Prime</h5>
                          <small className='card-text'>Prime is a music site , people can check for any artist or band dance to perform on their occassions.</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Vuejs, Nodejs and MySQL</small> <br/>
                          <small>The project is on the building process</small><br/>
                          <Link to="https://elijay-artist-app.vercel.app/"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>                          
                        </div>
                      </div>
                    </div>  <br/>

                    <div className='col-md-4 '>
                    <div className='card    text-light'>
                        <div className='card-body'>
                          <h5 className='card-title '>Elijay Anonymous Message</h5>
                          <small className='card-text'>Anonymous Message is made by someone whose name is not known or not made public</small><br/><br/>
                          <small><b>Technologies:</b></small><br/>
                          <small>Reactjs, Tailwind, Nodejs and MongoDb</small><br/>
                          <Link to="https://elijay-anonymous-message.vercel.app/"  className='text-light'><i class="fa fa-globe" aria-hidden="true"></i>visit</Link>
                        </div>
                      </div><br/>
                    </div>
                </div>
                
              </div>
          </div>


          <div className='container-fluid p-5 text-center  mt-5' id='client'>
            <div className='d-flex '>
              <div className='mx-auto'>

              <p>6 <br/> Projects Completed</p>
              <p>1 <br/> Happy Client</p>
              </div>
            </div>
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

      </header>
    </div>
  );
}

export default App;
