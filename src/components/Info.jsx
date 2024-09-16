import React from "react";

export default function Info(){
    return(
        <>
        <img className='myimage' src='./Me-myimage.png' />
        <h1 className='myname'>Bali Kumar Wad</h1>
        <h3 className="myrole">Web Developer / Designer</h3>
        <h4 className="mysite"><a href="baliwad.com.np">baliwad.com.np</a></h4>

        <div className="btn-container">
        <a target="_blank" href='susheelwad@gmail.com'><button className='info-btns' type='email'><img className="info-logo" src="./email-icon-logo.png"/>Email</button></a>
        <a target="_blank" href='https://www.linkedin.com/in/bali-kumar-wad-102382317'><button className='info-btns'><img className="info-logo" src="/linkedin-blue.png" />Linkedin</button></a>
        </div>
        </>
    )
}