import React from 'react'
import logo from '../image/campustocryptologo.png';
import bluetick from '../image/ON.png'
import mail from '../image/svg/mail.png';
import twitter from '../image/svg/twitter.png';
import instagram from '../image/svg/instagram.png';
import Ytube from '../image/svg/youtube.png'
import firstImg from '../image/first-img.png';
import secondImg from '../image/second-img.png';
import thridImg from '../image/thrid-img.png';
import fourthImg from '../image/four-image.png';
import fivthImg from '../image/five-image.png'
// import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const info = {
    mailLink: "https://www.campustocrypto.com",
    twitLink:"https://www.campustocrypto.com",
    instaLink: "https://www.campustocrypto.com",
    YtubeLink: "https://www.campustocrypto.com"
  }
  const linkTree = [
    {
      link: 'https://www.campustocrypto.com',
      img: firstImg,
      text: "Join our community"
    },
    {
      link: 'https://www.campustocrypto.com',
      img: secondImg,
      text: "Discord Server"
    },
    {
      link: 'https://www.campustocrypto.com',
      img: thridImg,
      text: "Latest YouTube Video"
    },
    {
      link: 'https://www.campustocrypto.com',
      img: fourthImg,
      text: "LinkedIn Profile"
    },
    {
      link: 'https://www.campustocrypto.com',
      img: fivthImg,
      text:"Latest Post on Medium"

    }
  ]
  return (
    <div>
      <div className="home-img">
        <div className="home-image-container">
          <div>
          <img src={logo} alt="" />
          </div>
        </div>

        <div className="h1-container">
          <div className='inside-header-main'>
            <h1>Campus to Crypto</h1>
            <img src={bluetick} alt="" />
          </div>
          <h3>@campustocrypto</h3>
        </div>
        <div className="social-media">
          <a href={info.mailLink} target='_blank' rel='noreferrer'><img src={mail} alt="" /></a>
          
          <a href={info.twitLink} target='_blank' rel='noreferrer'><img src={twitter} alt="" /></a>
          <a href={info.instaLink} target='_blank' rel='noreferrer'><img src={instagram} alt="" /></a>

          <a href={info.YtubeLink} target='_blank' rel='noreferrer'><img src={Ytube} alt="" /></a>
        </div>
        <div className="message-p">
          <p>Explore And learn the world of decentralized  and Blockchain technology</p>
        </div>
        <div className="linkTree">
          
            {linkTree.map((value,index)=>(
              <div className="first-Tree" key={index}>
                <a href={value.link} target='_blank' rel='noreferrer'>
                <div className='first-link-img'><img src={value.img} alt="" /></div>
                <div className='linkTree-Text'>{value.text}</div>
                </a>
              </div>
            ))};
        </div>
      </div>
    </div>
  )
}

export default Home
