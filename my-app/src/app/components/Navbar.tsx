import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link href="/">Virtual Gallery</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/artists">Artists</Link></li>
          <li><Link href="/auctions">Auctions</Link></li>
          <li>
            <Link href="/virtual-tour" className="btn btn-outline tour-btn">
              3D Tour
            </Link>
          </li>
          <li>
            <Link href="/login" className="btn login-nav-btn">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 