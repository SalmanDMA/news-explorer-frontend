import img from '../assets/images/about/salman.webp';
const About = () => {
 return (
  <section className='about'>
   <div className='about__image'>
    <img src={img} alt='foto profil' />
   </div>
   <div className='about__text'>
    <h3 className='about__heading'>Tentang Penulis</h3>
    <div className='about__paragraph'>
     <p>
      Saya adalah seorang Fullstack Developer dengan pengalaman sebagai intern di Alkademi dan melalui Mini Bootcamp Digital Talent Masjid. Saya memiliki keahlian dalam berbagai teknologi pengembangan, termasuk React.js, Vue.js, Next.js,
      Nuxt.js, Node.js, Express.js, PHP, MySQL, dan MongoDB.
     </p>
     <p>
      Selama pengalaman saya, saya telah berhasil menyelesaikan berbagai proyek yang mencakup pengembangan website dengan React.js ataupun Vue.js dan pembuatan API dengan Node.js. Saya juga telah berpartisipasi dalam proyek-proyek lain yang
      memungkinkan saya untuk mengasah keterampilan development dan memberikan solusi yang tepat untuk kebutuhan klien.
     </p>
     <p>
      Jangan sungkan untuk bertanya kepada saya, saya akan membantu anda dengan sepenuh hati. Silahkan hubungi saya untuk informasi lebih lanjut atau dapat melihat portofolio saya di link berikut{' '}
      <a href='https://bit.ly/portofolioSalmanDMA'>My Portofolio</a>
     </p>
    </div>
   </div>
  </section>
 );
};

export default About;
