import React from 'react'
import Logo from "./../assets/images/home-logo.png"

const Jumbotron = () => {
  return (
    <>
        <div className="container mt-3">
          <div className="mb-2 py-2 bg-warning rounded-3">
            <div className="container-fluid d-flex justify-content-center">
              {
                <img
                  src={Logo}
                  className="homeLogo img-fluid"
                  alt="fake-logo"
                ></img>
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Jumbotron