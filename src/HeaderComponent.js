import React from 'react'
import './Header.css'
import reactlogo from './assets/react.png';
import anglogo from './assets/angular.png';
 function Header() {
    return (
        <div className='header'>
             <div className='imagesDiv'>
                 <div className='react-rect'>
                     <img className="imagecrop" src={reactlogo} alt="react-logo"></img>
                 </div>
                 <div className='middleText'>
                     VS
                 </div>
                 <div className='angular-rect'>
                     <img className="imageCropAng" src={anglogo} alt="angular-logo"></img>
                 </div>
             </div>
        </div>
    )
}
export default Header;