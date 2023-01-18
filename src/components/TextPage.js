import React from 'react'
import './TextPage.css'

export default function TextPage({info}) {
  return (
    <div className='text_page'>
        <h1>
            ut aliquip ex ea commodo consequat
        </h1>
        <div className='text_page_inner'>
            <div className='inner'>
                <div className='img inner_top_img' style={{backgroundImage: `url(${info.top.img})`}}></div>
                <div className='inner_text inner_top_text'>
                    <h3>{info.top.title}</h3>
                    <p>{info.top.text}</p>
                </div>
            </div>
            <div className='inner inner_bottom'>
                <div className='inner_text inner_bottom_text'>
                    <h3>{info.bottom.title}</h3>
                    <p>{info.bottom.text}</p>
                </div>
                <div className='img_bottom'>
                    <div className='img inner_bottom_img' style={{backgroundImage: `url(${info.bottom.img})`}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
