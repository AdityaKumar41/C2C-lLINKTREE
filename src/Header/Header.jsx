import React, { useState, useEffect } from 'react'
import more from '../image/more.png';
import bell from '../image/bell.png';
import './Header.css'
const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showmore, setShowMore] = useState(false);
  const toggleMore = ()=>{
    setShowMore(!showmore);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMore(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [showmore]);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div>
      <header>
        <nav>
          <div>
              <div className="left-more" onClick={toggleMore}>
                <img src={more} alt="" />
              </div>
              <div className={`more-box ${showmore ? 'show' : 'hidden'}`}>
              <a href="#">Email us</a>
            </div>
          </div>
          <div>
            <div className="right-notification" onClick={toggleNotification}>
              <img src={bell} alt="" />
            </div>
            <div className={`notification-box ${showNotification ? 'show' : 'hidden'}`}>
              <a href="#">No notifications</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
