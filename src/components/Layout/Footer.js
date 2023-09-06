import React from 'react';
import { Link } from 'react-router-dom';
import { linkData } from '../../utils/LinkData';
import Icon from '../Icon';

const Footer = () => {
 const { home } = linkData;
 return (
  <footer className='footer'>
   <p className='footer__copyright'>
    © 2021 Supersite, Didukung oleh News API & Made with ❤️ by <a href='https://bit.ly/portofolioSalmanDMA'>Salman DMA</a>
   </p>
   <div className='footer__wrapper'>
    <div className='footer__links'>
     <Link to={home}>Beranda</Link>
     <a href='https://tripleten.com/'>Triple Ten</a>
    </div>
    <div className='footer__icons'>
     <a href='https://github.com/SalmanDMA'>
      <Icon icon='github' color='black' size='24px' />
     </a>
     <a href='https://www.linkedin.com/in/salmandma'>
      <Icon icon='linkedin' color='black' size='24px' />
     </a>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
