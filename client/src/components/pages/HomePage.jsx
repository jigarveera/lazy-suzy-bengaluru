import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Camera, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header, Footer } from '../ui/SiteChrome'
import MenuRotator from '../ui/MenuRotator'
import ReviewFlow from '../ui/ReviewFlow'
import { photos, site } from '../../constants/site.constant'
import interiorOne from '../../assets/ambience-images/interior-01.avif'
import interiorTwo from '../../assets/ambience-images/interior-02.avif'
import entrance from '../../assets/ambience-images/entrance-image.avif'

gsap.registerPlugin(ScrollTrigger)

const marqueePhrases = ['BRUNCH WELL', 'TAKE YOUR TIME', 'GOOD THINGS AWAIT', 'BRUNCH WELL', 'TAKE YOUR TIME', 'GOOD THINGS AWAIT', 'BRUNCH WELL', 'TAKE YOUR TIME', 'GOOD THINGS AWAIT']

export default function HomePage() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-reveal', { opacity: 0, y: 34, duration: 0.95, stagger: 0.11, ease: 'power3.out', clearProps: 'all' })
        gsap.to('.hero-food', { y: -62, rotation: -3, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
        gsap.to('.hero-backdrop', { y: 58, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
        gsap.utils.toArray('.reveal-on-scroll').forEach(element => {
          gsap.from(element, { opacity: 0, y: 36, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } })
        })
        gsap.timeline({ scrollTrigger: { trigger: '.ambience-photo', start: 'top 80%', end: 'bottom 20%', scrub: 1 } })
          .to('.ambience-photo .ambience-layer:nth-child(1)', { opacity: 0, duration: 1 })
          .to('.ambience-photo .ambience-layer:nth-child(2)', { opacity: 1, duration: 1 }, '<')
          .to('.ambience-photo .ambience-layer:nth-child(2)', { opacity: 0, duration: 1 })
          .to('.ambience-photo .ambience-layer:nth-child(3)', { opacity: 1, duration: 1 }, '<')
      })
    }, root)
    return () => { media.revert(); context.revert() }
  }, [])

  return (
    <div ref={root} className="site-page home-page">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${photos.interior})` }} aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-content">
              <h1 className="hero-reveal" id="hero-heading">Come in.<br /><em>Stay a little.</em></h1>
              <p className="hero-description hero-reveal">Good food has a way of slowing the day down. Pull up a chair, find your favourite, and let the afternoon unfold.</p>
              <div className="hero-actions hero-reveal">
                <Link className="button button-yellow" to="/shop">Explore the menu <ArrowUpRight size={18} /></Link>
                <a className="button button-ghost" href={site.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> Find us</a>
              </div>
              <div className="hero-footnote hero-reveal"><span className="dot" /> DELI · CAFÉ · PÂTISSERIE <span className="sep" /> BENGALURU</div>
            </div>
            <div className="hero-art" aria-label="Lazy Suzy Salisbury lamb burger">
              <div className="hero-art-disc" aria-hidden="true" />
              <div className="hero-art-ring" aria-hidden="true" />
              <img className="hero-food hero-reveal" src={photos.burger} alt="Lazy Suzy Signature Salisbury lamb burger" fetchPriority="high" />
              <div className="hero-food-label hero-reveal"><span>01 / A LITTLE HUNGRY?</span><strong>Signature Salisbury<br />lamb burger</strong></div>
            </div>
          </div>
          <a className="scroll-cue" href="#story">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
        </section>

        <div className="brand-tape" aria-hidden="true">
          <div className="brand-tape-track">
            {[0, 1].map(copy => <div className="brand-tape-group" key={copy}>{marqueePhrases.map((phrase, index) => <span className="brand-tape-item" key={`${copy}-${index}`}>{phrase} <b>✳</b></span>)}</div>)}
          </div>
        </div>

        <section className="story-section section-pad" id="story" aria-labelledby="story-heading">
          <div className="shell story-grid">
            <div className="story-visual reveal-on-scroll">
              <img src={photos.table} alt="A spread of food, drinks and pastries at Lazy Suzy" loading="lazy" />
              <div className="story-stamp">INDIRANAGAR<br />BENGALURU</div>
            </div>
            <div className="story-copy reveal-on-scroll">
              <span className="eyebrow">A PLACE TO PAUSE</span>
              <h2 id="story-heading">A table for <em>all your moods.</em></h2>
              <p>Lunch that turns into an afternoon. A coffee that deserves a second cup. Dessert just because. Find your own rhythm in Lazy Suzy’s colourful corner of the city.</p>
              <div className="story-points"><span>01 <b>Brunch favourites</b></span><span>02 <b>Comforting mains</b></span><span>03 <b>Something sweet</b></span></div>
              <Link className="text-link" to="/shop">See what’s on the menu <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </section>

        <MenuRotator />

        <section className="ambience-section section-pad" aria-labelledby="ambience-heading">
          <div className="shell ambience-grid">
            <div className="ambience-copy reveal-on-scroll"><span className="eyebrow">MORE THAN A MEAL</span><h2 id="ambience-heading">Find your <em>happy place.</em></h2><p>Warm corners, bright walls, and a reason to settle in. Lazy Suzy is just off 80 Feet Road in Indiranagar.</p><a className="button button-outline" href={site.maps} target="_blank" rel="noreferrer">Plan your visit <ArrowUpRight size={17} /></a></div>
            <div className="ambience-photo reveal-on-scroll">
              <img className="ambience-layer" src={photos.interior} alt="Dining room at Lazy Suzy" loading="lazy" />
              <img className="ambience-layer" src={interiorOne} alt="Another view of the café interior" loading="lazy" />
              <img className="ambience-layer" src={interiorTwo} alt="A café seating area" loading="lazy" />
              <span className="ambience-photo-index">THE CAFÉ · INDIRANAGAR</span>
            </div>
            <div className="ambience-mini reveal-on-scroll"><img src={entrance} alt="Lazy Suzy entrance" loading="lazy" /><span>Little corners,<br />lovely moments.</span></div>
          </div>
        </section>

        <ReviewFlow />

        <section className="visit-section section-pad" id="visit" aria-labelledby="visit-heading">
          <div className="shell visit-panel reveal-on-scroll">
            <div className="visit-panel-map">
              <iframe src={site.mapsEmbed} title="Map showing Lazy Suzy in Indiranagar, Bengaluru" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="visit-panel-copy"><span className="eyebrow">SEE YOU SOON</span><h2 id="visit-heading">Your next favourite<br /><em>afternoon is here.</em></h2><p>No rush. Just good food and a seat waiting somewhere in Indiranagar.</p><div className="visit-actions"><a href={site.maps} target="_blank" rel="noreferrer" className="button button-yellow">Get directions <ArrowUpRight size={18} /></a><a href={site.dineout} target="_blank" rel="noreferrer" className="button button-outline">Reservations on Dineout <ArrowUpRight size={18} /></a></div></div>
          </div>
          <div className="shell visit-social"><span>More from the café</span><a href={site.instagram} target="_blank" rel="noreferrer"><Camera size={18} /> @lazysuzyblr <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
