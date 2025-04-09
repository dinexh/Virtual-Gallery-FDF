"use client";
import Link from 'next/link';
import './globals.css';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link href="/">Virtual Gallery</Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/artists">Artists</Link></li>
            <li><Link href="/auctions">Auctions</Link></li>
            <li><Link href="/virtual-tour" className="btn btn-outline">3D TOUR</Link></li>
            <li><Link href="/login" className="btn">SIGN IN</Link></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            VIRTUAL<br/>
            GALLERY
          </h1>
          <p className="hero-subtitle">
            A DIGITAL SPACE FOR CONTEMPORARY ART
          </p>
          <div className="hero-cta">
            <Link href="/gallery" className="btn">
              ENTER GALLERY
            </Link>
            <Link href="/virtual-tour" className="btn btn-outline">
              VIRTUAL TOUR
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>FEATURED WORKS</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="card-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="card-content">
              <h3>01 / ABSTRACT</h3>
              <p>Contemporary Minimalism</p>
            </div>
          </div>
          <div className="featured-card">
            <div className="card-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="card-content">
              <h3>02 / DIGITAL</h3>
              <p>Modern Expression</p>
            </div>
          </div>
          <div className="featured-card">
            <div className="card-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="card-content">
              <h3>03 / SCULPTURE</h3>
              <p>Form and Space</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>EXPLORE THE COLLECTION</h2>
          <p>CURATED SELECTION OF CONTEMPORARY ARTWORKS</p>
          <Link href="/virtual-tour" className="btn">
            START TOUR
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat">
          <span className="stat-number">3,000+</span>
          <span className="stat-label">ARTWORKS</span>
        </div>
        <div className="stat">
          <span className="stat-number">800+</span>
          <span className="stat-label">ARTISTS</span>
        </div>
        <div className="stat">
          <span className="stat-number">100K+</span>
          <span className="stat-label">VISITORS</span>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2024 VIRTUAL GALLERY</p>
            <p>DINESH KORUKONDA | 2300030350</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
