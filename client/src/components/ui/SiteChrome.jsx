import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Camera, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { site } from '../../constants/site.constant'

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link to="/" className="brand" aria-label="Lazy Suzy, home">
          <span className="brand-mark"><img src="/images/lazy-suzy-logo-transparent.png" alt="" /></span>
          <span className="brand-copy"><strong>Lazy Suzy</strong><small>DELI · CAFÉ · PÂTISSERIE</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#story">Our place</a>
          <Link to="/shop" aria-current={pathname === '/shop' ? 'page' : undefined}>The menu</Link>
          <a href="/#reviews">Reviews</a>
          <a href="/#visit">Visit</a>
        </nav>
        <Link to="/shop" className="header-shop" aria-label="Browse the menu" title="Browse the menu">
          <ShoppingBag size={20} strokeWidth={1.8} aria-hidden="true" />
          <span>Browse menu</span>
        </Link>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <span className="eyebrow">TAKE THE SLOW WAY</span>
          <h2>Good food. <em>Good company.</em></h2>
          <p>A little yellow corner of Indiranagar for meals worth lingering over.</p>
        </div>
        <div>
          <h3>Find us</h3>
          <p>{site.address}</p>
          <a href={site.maps} target="_blank" rel="noreferrer"><MapPin size={16} /> Get directions <ArrowUpRight size={14} /></a>
        </div>
        <div>
          <h3>Stay in touch</h3>
          <a href={site.phoneHref}><Phone size={16} /> {site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer"><Camera size={16} /> Instagram <ArrowUpRight size={14} /></a>
          <a href={site.dineout} target="_blank" rel="noreferrer">Reservations on Swiggy Dineout <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Lazy Suzy · Private website concept</span><span>Menu and prices to be confirmed with the café before launch.</span></div>
    </footer>
  )
}
