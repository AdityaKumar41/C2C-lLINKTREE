import React from 'react';
import './footer.css'
const linkR = 'https://www.campustocrypto.com';

const footer = () => {
  return (
    <div>
      <div className="footer">
        <div className='hand-img'>👋</div>
        <a href={linkR} target='_blank' rel='noreferrer'>WWW.CAMPUSTOCRYPTO.COM</a>
      </div>
    </div>
  )
}

export default footer
