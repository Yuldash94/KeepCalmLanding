import React from 'react'
import './ScrollPage.css'

export default function ScrollPage({info}) {
  return (
    <div className='scroll_page'>
      <h1>Lorem ipsum dolor sit amet</h1>
      <div className='carousel_container' >
        <div className='window'>
          <div className='scroll_inner' >
            {info.map(item => 
                  <img key={item.imgUrl} src={item.imgUrl} alt=''/>
                  // <div className='scroll_inner_img' style={{backgroundImage: `url(${item.imgUrl})`}}></div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
