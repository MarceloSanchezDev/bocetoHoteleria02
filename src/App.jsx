import './App.css'
import img1 from './assets/imagen7.jpg'
import img2 from './assets/imagen7.jpg'
import img3 from './assets/imagen7.jpg'
import img4 from './assets/imagen7.jpg'
import img5 from './assets/imagen7.jpg'
import img6 from './assets/imagen6.jpg'
import img7 from './assets/imagen8.jpg'
import img8 from './assets/imagen9.jpg'

function App() {

  return (
    <main className="mainContent">

      {/* HEADER */}
      <header className="headerContent">
        <nav className="navBar">
          <div className="logo">LUXE RESORT</div>

          <ul className="navLinks">
            <li>Casino</li>
            <li>Resort</li>
            <li>Entertainment</li>
            <li>Food & Drink</li>
            <li>Club</li>
          </ul>

          <button className="btn-gold">Book Now</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Chill Vibes. Hot Promotions.</h1>
          <p>Luxury experiences crafted for unforgettable nights</p>
          <button className="btn-gold">Explore Now</button>
        </div>
      </section>

      {/* AWARDS */}
      <section className="sectionOfAward">
        <h2>Award Winning Experience</h2>
        <p>
          Discover world-class service, exclusive entertainment and unforgettable luxury.
        </p>

        <div className="contentAward">
          {[1,2,3,4].map((i) => (
            <div className="awardCard" key={i}>
              <span className="material-symbols-outlined">award_star</span>
              <p>Luxury Award</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOTION CAROUSEL */}
      <section className="sectionOfPromotion">
        <h2>Exclusive Promotions</h2>

        <div className="gallery-carousel">
          <div className="track">
            {[img1,img2,img3,img4,img5,img1,img2,img3,img4,img5].map((img,i)=>(
              <img key={i} src={img} alt="promotion" />
            ))}
          </div>
        </div>

        <button className="btn-gold">Show More</button>
      </section>

      {/* SHOWS DASHBOARD */}
      <section className="sectionOfShows">
        <div className="dashboard-grid">

          <div className="cardPrincipal">
            <img src={img7} alt="Main show" />
            <div className="card-overlay">
              <h3>Live Entertainment</h3>
              <p>Experience unforgettable nights</p>
            </div>
          </div>

          <div className="cardsSeconds">
            {[img8,img8,img8].map((img,i)=>(
              <div className="cardSecondary" key={i}>
                <img src={img} alt="Show" />
                <div className="card-overlay-small">
                  <h5>Exclusive Event</h5>
                </div>
              </div>
            ))}
          </div>

        </div>

        <button className="btn-gold">See All Shows</button>
      </section>
      {/* PROMOTION CAROUSEL */}
      <section className="sectionOfPromotion">
        <h2>Exclusive Promotions</h2>

        <div className="gallery-carousel">
          <div className="track">
            {[img1,img2,img3,img4,img5,img1,img2,img3,img4,img5].map((img,i)=>(
              <img key={i} src={img} alt="promotion" />
            ))}
          </div>
        </div>

        <button className="btn-gold">Show More</button>
      </section>
      {/* TESTIMONIALS */}
<section className="sectionTestimonials">
  <h2>What Our Guests Say</h2>

  <div className="testimonialsGrid">

    {[
      {
        name: "Sophia Martinez",
        text: "An unforgettable luxury experience. The service, the ambiance, everything was flawless."
      },
      {
        name: "James Walker",
        text: "Best resort I’ve ever visited. The entertainment and hospitality are next level."
      },
      {
        name: "Emma Collins",
        text: "From the rooms to the fine dining, this place defines elegance."
      }
    ].map((review, index) => (
      <div className="testimonialCard" key={index}>
        <div className="stars">
          ★★★★★
        </div>
        <p className="testimonialText">"{review.text}"</p>
        <h4 className="testimonialName">— {review.name}</h4>
      </div>
    ))}

  </div>
</section>

<footer className="footer">

  <div className="footerGrid">

    <div className="footerColumn">
      <h3>LUXE RESORT</h3>
      <p>Experience world-class luxury and unforgettable moments.</p>
    </div>

    <div className="footerColumn">
      <h4>Explore</h4>
      <ul>
        <li>Casino</li>
        <li>Resort</li>
        <li>Dining</li>
        <li>Events</li>
      </ul>
    </div>

    <div className="footerColumn">
      <h4>Contact</h4>
      <ul>
        <li>Email: info@luxeresort.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Location: Las Vegas, NV</li>
      </ul>
    </div>

    <div className="footerColumn">
      <h4>Follow Us</h4>
      <div className="socialIcons">
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </div>
    </div>

  </div>

  <div className="footerBottom">
    © 2026 Luxe Resort. All rights reserved.
  </div>

</footer>


    </main>
  )
}

export default App
