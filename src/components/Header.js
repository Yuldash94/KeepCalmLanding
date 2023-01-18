import React from 'react'
import { FiPhone } from 'react-icons/fi'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header_inner'>
            <div className='logo'>
                <img src='./img/logo.png' alt='logo'></img>
            </div>
            <div className='header_inner_call'>
                <a href='tel:+7 (495) 495-49-54' className='desktop_call'>
                    +7 (495) 495-49-54
                </a>
                <a href='tel:+7 (495) 495-49-54' className='mobile_call'>
                    <FiPhone />
                </a>
            </div>
        </div>
    </div>
  )
}
